import { Select } from 'antd';
import { OptionProps, SelectProps } from 'antd/es/select';
import { useEffect, useState } from 'react';
import { defaultAreas, Area, LocaleType, LocaleEnum } from './sources';
import { searchArea } from './third-party';

export interface AreaSelectProps extends SelectProps<any> {
  locale?: LocaleType;
  optionProps?: OptionProps;
  filterArea?: (value: Area, index: number, array: Area[]) => boolean;
  areaProcessor?: (value: Area) => Area;
}

export const AreaSelect = ({
  optionProps,
  locale = 'en',
  filterArea,
  areaProcessor,
  ...selectProps
}: AreaSelectProps) => {
  const [areas, setAreas] = useState(defaultAreas);
  useEffect(() => {
    if (!(locale in LocaleEnum)) return;
    import(`world_countries_lists/data/${locale}/world.json`).then(
      (worldJson) => {
        setAreas(
          defaultAreas.map((area) => ({
            ...area,
            name: searchArea(
              { alpha2: area.short.toLowerCase() },
              worldJson.default
            )?.name,
          }))
        );
      }
    );
  }, [locale]);

  return (
    <span
      onMouseUp={(e) => {
        // workaround for this: https://github.com/ant-design/ant-design/commit/ed1959c13e938a2f1d71c315bc79cb621853ec8f
        e.stopPropagation();
      }}
    >
      <Select
        showArrow
        showSearch
        bordered={false}
        dropdownMatchSelectWidth={false}
        optionLabelProp="label"
        filterOption={(input, option) => {
          const key = option?.key;
          return (
            (key as string).toLowerCase().indexOf(input.toLowerCase()) >= 0
          );
        }}
        {...selectProps}
      >
        {areas
          .filter((value: Area, index: number, array: Area[]) => {
            return filterArea ? filterArea(value, index, array) : true;
          })
          .map((_item) => {
            const item = areaProcessor?.(_item) || _item;
            const key = `${item.name} ${item.phoneCode}`;
            const fixedProps = {
              key,
              value: item.short,
              label: (
                <>
                  {item.emoji} +{item.phoneCode}
                </>
              ),
            };
            return (
              <Select.Option {...optionProps} {...fixedProps}>
                {item.emoji} {key}
              </Select.Option>
            );
          })}
      </Select>
    </span>
  );
};

export default AreaSelect;
