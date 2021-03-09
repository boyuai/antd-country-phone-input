import { useCallback, useState, useMemo, useEffect } from 'react';
import { Input } from 'antd';
import { GroupProps, InputProps } from 'antd/lib/input';
import areas, { Area, LocaleType } from './sources';
import AreaSelect, { AreaSelectProps } from './area-select';

export * from './sources';

interface PropTypes extends Omit<InputProps, 'value' | 'onChange'> {
  onChange?: (value: CountryPhoneInputValue) => void;
  value?: CountryPhoneInputValue;
  selectProps?: AreaSelectProps;
  inputGroupProps?: GroupProps;
  inline?: boolean;
  locale?: LocaleType;
}

export type CountryPhoneInputValue = {
  code?: number;
  phone?: string;
  short?: string;
};

function CountryPhoneInput({
  onChange,
  selectProps = {},
  inputGroupProps,
  inline,
  locale,
  ...inputProps
}: PropTypes) {
  selectProps.locale = locale;
  const defaultArea: Area | undefined = useMemo(() => {
    return areas.find((area) => area.short === 'CN');
  }, []);

  const [area, setArea] = useState<Area | undefined>(defaultArea);
  const [phone, setPhone] = useState<string | undefined>();

  useEffect(() => {
    if (!('value' in inputProps)) {
      return;
    }

    const { value } = inputProps;
    if (value === undefined) {
      setArea(undefined);
      setPhone(undefined);
      return;
    }
    if (value.short) {
      setArea(areas.find((area) => area.short === value.short));
    } else {
      setArea(areas.find((area) => Number(area.phoneCode) === value.code));
    }
    setPhone(value.phone);
  }, [inputProps]);

  const triggerChange = useCallback(
    (phone?: string, area?: Area) => {
      const result: CountryPhoneInputValue = {
        phone,
        code: area && Number(area.phoneCode),
        short: area?.short,
      };
      onChange?.(result);
    },
    [onChange]
  );

  const handleAreaChange = useCallback(
    (value: string) => {
      const area = areas.find((area) => area.short === value);
      if (!area) {
        return;
      }
      setArea(area);
      triggerChange(phone, area);
    },
    [setArea, triggerChange, phone]
  );

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = e.target.value;
      setPhone(currentValue);
      triggerChange(currentValue, area);
    },
    [setPhone, area, triggerChange]
  );

  const areaSelectProps: Partial<AreaSelectProps> = {
    ...selectProps,
    value: area?.short,
    onChange: handleAreaChange,
  };

  const phoneInputProps: Partial<InputProps> = {
    ...inputProps,
    value: inputProps.value?.phone,
    onChange: handlePhoneChange,
  };

  if (inline) {
    return (
      <Input.Group
        compact
        className="antd-country-phone-input"
        {...inputGroupProps}
      >
        <AreaSelect
          className="inline-area-select"
          style={{ width: 95 }}
          bordered
          {...areaSelectProps}
        />
        <Input
          className="inline-phone-input"
          style={{ width: 'calc(100% - 95px)' }}
          {...phoneInputProps}
        />
      </Input.Group>
    );
  }

  return (
    <Input prefix={<AreaSelect {...areaSelectProps} />} {...phoneInputProps} />
  );
}

export default CountryPhoneInput;
