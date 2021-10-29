import { SelectProps } from 'rc-select';
import { useCallback, useEffect, useState } from 'react';
import compactAreas, { Area } from './sources';
import { CountryPhoneInputValue } from './typings';

export const filterOption: SelectProps['filterOption'] = (input, option) => {
  const key = (option?.key as string).toLowerCase();
  const inputChars = Array.from(input.toLowerCase());
  const keyHasAllChars = inputChars.reduce((prevResult, char) => {
    if (prevResult === undefined) {
      return true;
    }
    return prevResult && key.includes(char);
  }, true);
  return keyHasAllChars;
};

export const filterSort: SelectProps['filterSort'] = (a, b) => {
  const keyA = a.key as string;
  const keyB = b.key as string;
  return keyA.length - keyB.length;
};

export const usePhoneInput = ({
  isControlled,
  defaultValue,
  value,
  onChange,
}: {
  isControlled: boolean;
  defaultValue?: CountryPhoneInputValue;
  value?: CountryPhoneInputValue;
  onChange?: (value: CountryPhoneInputValue) => void;
}) => {
  if (defaultValue) {
    defaultValue.short = defaultValue.short?.toUpperCase();
  }
  if (value) {
    value.short = value.short?.toUpperCase();
  }

  const defaultArea: Area | undefined = compactAreas.find((area) => {
    if (defaultValue) {
      return area.short === defaultValue.short;
    }
    return area.short === 'CN';
  });
  const [area, setArea] = useState<Area | undefined>(defaultArea);
  const [phone, setPhone] = useState<string | undefined>(defaultValue?.phone);

  useEffect(() => {
    if (!isControlled) return;

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
  }, [value, isControlled]);

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

  return { area, handleAreaChange, handlePhoneChange };
};
