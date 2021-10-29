import Select, { SelectProps } from 'rc-select';
import { OptionProps } from 'rc-select/es/Option';
import React, { useContext } from 'react';
import { configContext } from './config';
import { filterOption, filterSort } from './shared';

export interface AreaSelectProps extends SelectProps<any> {
  optionProps?: OptionProps;
}

export const AreaSelect = ({
  optionProps,
  ...selectProps
}: AreaSelectProps) => {
  const { areas } = useContext(configContext);

  return (
    <Select
      showArrow
      showSearch
      dropdownMatchSelectWidth={false}
      optionLabelProp="label"
      filterOption={filterOption}
      filterSort={filterSort}
      {...selectProps}
    >
      {areas.map((item) => {
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
  );
};

export default AreaSelect;
