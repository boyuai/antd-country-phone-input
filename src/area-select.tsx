import { Select } from 'antd';
import { OptionProps, SelectProps } from 'antd/es/select';
import { useEffect, useState } from 'react';
import {
  defaultAreas,
  searchArea,
  Area,
  LocaleType,
  LocaleEnum,
} from './sources';

export interface AreaSelectProps extends SelectProps<any> {
  locale?: LocaleType;
  optionProps?: OptionProps;
  filterArea?: (value: Area, index: number, array: Area[]) => boolean;
  areaProcessor?: (value: Area) => Area;
}

const AreaSelect = ({
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
            [locale]: searchArea(
              { alpha2: area.short.toLowerCase() },
              worldJson.default
            ).name,
          }))
        );
      }
    );
  }, [locale]);

  return (
    <Select
      showArrow
      showSearch
      bordered={false}
      dropdownMatchSelectWidth={false}
      optionLabelProp="label"
      filterOption={(input, option) => {
        const key = option?.key;
        return (key as string).toLowerCase().indexOf(input.toLowerCase()) >= 0;
      }}
      {...selectProps}
    >
      {areas
        .filter((value: Area, index: number, array: Area[]) => {
          return filterArea ? filterArea(value, index, array) : true;
        })
        .map((_item) => {
          const item = areaProcessor?.(_item) || _item;
          const key = `${item[locale]} ${item.phoneCode}`;
          const fixedProps = {
            key,
            value: item.short,
            label: `${item.emoji} +${item.phoneCode}`,
          };
          return (
            <Select.Option {...optionProps} {...fixedProps}>
              {item.emoji} {key}
            </Select.Option>
          );
        })}
    </Select>
  );
};

export default AreaSelect;
