import { Select } from 'antd';
import { OptionProps, SelectProps } from 'antd/es/select';
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
    </span>
  );
};

export default AreaSelect;
