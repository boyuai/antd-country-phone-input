import React from 'react';
import AreaSelect, { AreaSelectProps } from './area-select.lite';
import { CountryPhoneInputValue } from './typings';
import { usePhoneInput } from './shared';

export interface CountryPhoneInputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'defaultValue' | 'value' | 'onChange'
  > {
  defaultValue?: CountryPhoneInputValue;
  value?: CountryPhoneInputValue;
  onChange?: (value: CountryPhoneInputValue) => void;
  selectProps?: AreaSelectProps;
  className?: string;
}

export const CountryPhoneInput = ({
  defaultValue,
  onChange,
  selectProps = {},
  className,
  ...inputProps
}: CountryPhoneInputProps) => {
  const isControlled = 'value' in inputProps;
  const { value } = inputProps;
  const { area, handleAreaChange, handlePhoneChange } = usePhoneInput({
    isControlled,
    defaultValue,
    value,
    onChange,
  });

  const areaSelect = (
    <AreaSelect
      {...selectProps}
      value={area?.short}
      onChange={handleAreaChange}
    />
  );

  return (
    <>
      {areaSelect}
      <input
        {...inputProps}
        className={
          'rc-country-phone-input' + (className ? ` ${className}` : '')
        }
        value={isControlled ? value?.phone ?? '' : undefined}
        onChange={handlePhoneChange}
      />
    </>
  );
};
