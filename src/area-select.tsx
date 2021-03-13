import { Select } from 'antd';
import { OptionProps, SelectProps } from 'antd/es/select';
import areas, { Area, LocaleType } from './sources';

export interface AreaSelectProps extends SelectProps<any> {
  locale?: LocaleType;
  optionProps?: OptionProps;
  filterArea?: (value: Area, index: number, array: Area[]) => boolean;
  // areaProcessor?: (value: Area) => Area;
}

const AreaSelect = ({
  optionProps,
  locale,
  filterArea,
  // areaProcessor,
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
      {areas
        .filter((value: Area, index: number, array: Area[]) => {
          return filterArea ? filterArea(value, index, array) : true;
        })
        .map((item) => {
          // const item = areaProcessor?.(_item) || _item;
          const key = `${locale === 'zh' ? item.zh : item.en} ${
            item.phoneCode
          }`;
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
