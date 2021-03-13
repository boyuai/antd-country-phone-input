import { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import { Input } from 'antd';
import { GroupProps, InputProps } from 'antd/es/input';
import areas, { Area, LocaleType } from './sources';
import AreaSelect, { AreaSelectProps } from './area-select';
import './styles.less';

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
      setArea(areas.find((area) => area.short === value.short));
    } else {
      setArea(areas.find((area) => area.phoneCode === value.code));
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
