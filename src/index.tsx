import { useCallback, useState, useEffect, useRef } from 'react';
import { Input } from 'antd';
import { GroupProps, InputProps } from 'antd/es/input';
import compactAreas, { Area, LocaleType } from './sources';
import AreaSelect, { AreaSelectProps } from './area-select';
import './styles.less';

export * from './area-select';
export * from './sources';

interface PropTypes
  extends Omit<InputProps, 'defaultValue' | 'value' | 'onChange'> {
  onChange?: (value: CountryPhoneInputValue) => void;
  value?: CountryPhoneInputValue;
  defaultValue?: CountryPhoneInputValue;
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
  defaultValue,
  onChange,
  selectProps = {},
  inputGroupProps,
  inline,
  locale,
  ...inputProps
}: PropTypes) {
  selectProps.locale = locale;
  if (defaultValue) {
    defaultValue.short = defaultValue.short?.toUpperCase();
  }
  if (inputProps.value) {
    inputProps.value.short = inputProps.value.short?.toUpperCase();
  }

  const defaultArea: Area | undefined = compactAreas.find((area) => {
    if (defaultValue) {
      return area.short === defaultValue.short;
    }
    return area.short === 'CN';
  });
  const [area, setArea] = useState<Area | undefined>(defaultArea);
  const [phone, setPhone] = useState<string | undefined>(defaultValue?.phone);

  const latestInputPropsRef = useRef(inputProps);
  useEffect(() => {
    latestInputPropsRef.current = inputProps;
  }, [inputProps]);
  useEffect(() => {
    if (!('value' in latestInputPropsRef.current)) {
      return;
    }

    const value = inputProps.value;
    if (value === undefined) {
      setArea(undefined);
      setPhone(undefined);
      return;
    }
    if (value.short) {
      setArea(compactAreas.find((area) => area.short === value.short));
    } else {
      setArea(compactAreas.find((area) => area.phoneCode === value.code));
    }
    setPhone(value.phone);
  }, [inputProps.value]);

  const triggerChange = useCallback(
    (phone?: string, area?: Area) => {
      const result: CountryPhoneInputValue = {
        phone,
        code: area?.phoneCode,
        short: area?.short,
      };
      onChange?.(result);
    },
    [onChange]
  );

  const handleAreaChange = useCallback(
    (value: string) => {
      const area = compactAreas.find((area) => area.short === value);
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

  const areaSelect = (
    <AreaSelect
      {...selectProps}
      value={area?.short}
      onChange={handleAreaChange}
    />
  );

  if (inline) {
    inputProps.addonBefore = areaSelect;
  } else {
    inputProps.prefix = areaSelect;
  }

  return (
    <Input
      {...inputProps}
      className="antd-country-phone-input"
      value={inputProps.value?.phone}
      onChange={handlePhoneChange}
    />
  );
}

export default CountryPhoneInput;
