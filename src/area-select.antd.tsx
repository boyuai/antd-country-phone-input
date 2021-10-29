import { Select } from 'antd';
import { OptionProps, SelectProps } from 'antd/es/select';
import React, { useContext } from 'react';
import { configContext } from './config';

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
        filterSort={(a, b) => {
          const keyA = a.key as string;
          const keyB = b.key as string;
          return keyA.length - keyB.length;
        }}
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
