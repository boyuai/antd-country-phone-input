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
  disabled?: boolean;
}

export const CountryPhoneInput = ({
  defaultValue,
  onChange,
  selectProps = {},
  className,
  disabled,
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
  const commonProps = { disabled };

  const areaSelect = (
    <AreaSelect
      {...commonProps}
      {...selectProps}
      value={area?.short}
      onChange={handleAreaChange}
    />
  );

  return (
    <>
      {areaSelect}
      <input
        {...commonProps}
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
