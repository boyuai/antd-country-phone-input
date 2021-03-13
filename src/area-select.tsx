import { Select } from 'antd';
import { OptionProps, SelectProps } from 'antd/es/select';
import areas, { LocaleType } from './sources';

export interface AreaSelectProps extends SelectProps<any> {
  locale?: LocaleType;
  optionProps?: OptionProps;
}

const AreaSelect = ({
  optionProps,
  locale,
  ...selectProps
}: AreaSelectProps) => {
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
      {areas.map((item) => {
        const key = `${locale === 'zh' ? item.zh : item.en} ${item.phoneCode}`;
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
