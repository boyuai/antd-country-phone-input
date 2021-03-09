import { Select } from 'antd';
import { OptionProps, SelectProps } from 'antd/lib/select';
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
      bordered={false}
      dropdownMatchSelectWidth={false}
      {...selectProps}
      optionLabelProp="label"
    >
      {areas.map((item) => {
        const fix = {
          key: item.short,
          value: item.short,
          label: `${item.emoji} +${item.phoneCode}`,
        };
        return (
          <Select.Option {...optionProps} {...fix}>
            {item.emoji} {locale === 'zh' ? item.zh : item.en} {item.phoneCode}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default AreaSelect;
