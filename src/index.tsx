import React, {
    useCallback,
    useState,
    useMemo,
    useRef,
    useEffect,
    forwardRef
} from 'react';
import { Input, Select } from 'antd';
import countries, { ICountry } from './source';

const InputGroup = Input.Group;

interface PropTypes {
    onChange?: Function;
    value?: CountryPhoneCodeValue;
}

interface CountryPhoneCodeValue {
    code?: number;
    phone?: string;
}

function CountryPhoneCode({ onChange, value }: PropTypes, ref: any) {
    const defaultCountry: ICountry | undefined = useMemo(() => {
        return countries.find(c => c.en === 'China');
    }, []);

    const [country, setCountry] = useState<ICountry | undefined>(defaultCountry);
    const [phone, setPhone] = useState<string | undefined>();
    const phoneRef = useRef(null);

    useEffect(() => {
        if (value !== undefined) {
            setCountry(countries.find(c => Number(c.phoneCode) === value.code));
            setPhone(value.phone);
        }
    }, [value]);

    const triggerChange = useCallback(
        (phone?: string, country?: ICountry) => {
            const result: CountryPhoneCodeValue = {
                phone,
                code: country && Number(country.phoneCode)
            };
            if (onChange) {
                onChange(result);
            }
        },
        [onChange]
    );

    const handleCountryChange = useCallback(
        (value: string) => {
            const c = countries.find(c => c.en === value);
            if (!c) {
                throw new Error(`Country not found: ${value}`);
            }
            setCountry(c);
            triggerChange(phone, c);
        },
        [setCountry, triggerChange, phone]
    );

    const handlePhoneChange = useCallback(() => {
        // @ts-ignore: Object is possibly 'null'.
        const value = phoneRef.current.input.value;
        setPhone(value);
        triggerChange(value, country);
    }, [setPhone, country, triggerChange]);

    return (
        <InputGroup compact>
            <Select
                value={country && country.en}
                style={{ width: "100px" }}
                dropdownMatchSelectWidth={false}
                optionLabelProp="label"
                onChange={handleCountryChange}
            >
                {countries.map(item => {
                    const fix = {
                        key: item.en,
                        value: item.en,
                        label: `${item.emoji}${item.phoneCode}`
                    };
                    return (
                        <Select.Option {...fix}>
                            {item.emoji} {item.zh} {item.phoneCode}
                        </Select.Option>
                    );
                })}
            </Select>
            <Input
                style={{ width: "calc(100% - 100px)" }}
                ref={phoneRef}
                onChange={handlePhoneChange}
                value={value && value.phone}
            />
        </InputGroup>
    );
}

export default forwardRef(CountryPhoneCode);
