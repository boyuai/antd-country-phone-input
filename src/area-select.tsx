import { Select } from 'antd';
import { OptionProps, SelectProps } from 'antd/es/select';
import React, { useContext, useEffect, useState } from 'react';
import { AreaFilter, AreaMapper, configContext } from './config';
import { defaultAreas, Area } from './sources';
import { LocaleEnum, LocaleType, searchArea } from './third-party';

export interface AreaSelectProps extends SelectProps<any> {
  locale?: LocaleType;
  optionProps?: OptionProps;
  // rename to areaFilter in next big version?
  filterArea?: AreaFilter;
  // rename to areaMapper in next big version?
  areaProcessor?: AreaMapper;
}

export const AreaSelect = ({
  optionProps,
  locale,
  filterArea,
  areaProcessor,
  ...selectProps
}: AreaSelectProps) => {
  const {
    locale: globalLocale,
    areaFilter: globalAreaFilter,
    areaMapper: globalAreaMapper,
  } = useContext(configContext);
  const [areas, setAreas] = useState(defaultAreas);
  const combinedLocale = locale || globalLocale;
  const combinedAreaFilter = filterArea || globalAreaFilter;
  const combinedAreaMapper = areaProcessor || globalAreaMapper;
  useEffect(() => {
    if (!(combinedLocale in LocaleEnum)) return;
    import(`world_countries_lists/data/${combinedLocale}/world.json`).then(
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
  }, [combinedLocale]);

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
          const key = (option?.key as string).toLowerCase();
          const inputChars = Array.from(input.toLowerCase());
          const keyHasAllChars = inputChars.reduce((prevResult, char) => {
            if (prevResult === undefined) {
              return true;
            }
            return prevResult && key.includes(char);
          }, true);
          return keyHasAllChars;
        }}
        {...selectProps}
      >
        {areas
          .filter((value: Area, index: number, array: Area[]) => {
            return combinedAreaFilter(value, index, array);
          })
          .map((_item) => {
            const item = combinedAreaMapper(_item);
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
