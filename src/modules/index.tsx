import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Input, Select } from 'antd';
import { InputProps } from 'antd/lib/input';
import { OptionProps, SelectProps } from 'antd/lib/select';
import countries, { Country } from './source';

interface PropTypes extends Omit<InputProps, 'value' | 'onChange'> {
  onChange?: (value: CountryPhoneInputValue) => void;
  value?: CountryPhoneInputValue;
  selectProps?: SelectProps<any>;
  optionProps?: OptionProps;
}

export type CountryPhoneInputValue = {
  code?: number;
  phone?: string;
  short?: string;
};

function CountryPhoneInput({
  onChange,
  value,
  selectProps,
  ...props
}: PropTypes) {
  const defaultCountry: Country | undefined = useMemo(() => {
    return countries.find((c) => c.short === 'CN');
  }, []);

  const [country, setCountry] = useState<Country | undefined>(defaultCountry);
  const [phone, setPhone] = useState<string | undefined>();

  useEffect(() => {
    if (value !== undefined) {
      if (value.short) {
        setCountry(countries.find((c) => c.short === value.short));
      } else {
        setCountry(countries.find((c) => Number(c.phoneCode) === value.code));
      }
      setPhone(value.phone);
    }
  }, [value]);

  const triggerChange = useCallback(
    (phone?: string, country?: Country) => {
      const result: CountryPhoneInputValue = {
        phone,
        code: country && Number(country.phoneCode),
        short: country && country.short,
      };
      onChange?.(result);
    },
    [onChange]
  );

  const handleCountryChange = useCallback(
    (value: string) => {
      const c = countries.find((c) => c.short === value);
      if (!c) {
        throw new Error(`Country not found: ${value}`);
      }
      setCountry(c);
      triggerChange(phone, c);
    },
    [setCountry, triggerChange, phone]
  );

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = e.target.value;
      setPhone(currentValue);
      triggerChange(currentValue, country);
    },
    [setPhone, country, triggerChange]
  );

  return (
    <Input
      prefix={
        <Select
          bordered={false}
          dropdownMatchSelectWidth={false}
          {...selectProps}
          optionLabelProp="label"
          value={country && country.short}
          onChange={handleCountryChange}
        >
          {countries.map((item) => {
            const fix = {
              key: item.short,
              value: item.short,
              label: `${item.emoji}+${item.phoneCode}`,
            };
            return (
              <Select.Option {...props.optionProps} {...fix}>
                {item.emoji} {item.zh} {item.phoneCode}
              </Select.Option>
            );
          })}
        </Select>
      }
      {...props}
      value={value && value.phone}
      onChange={handlePhoneChange}
    />
  );
}

export { CountryPhoneInput };
export default CountryPhoneInput;
