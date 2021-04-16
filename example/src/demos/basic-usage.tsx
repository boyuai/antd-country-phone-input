import { useState } from 'react';

import CountryPhoneInput, {
  CountryPhoneInputValue,
} from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';
import 'antd/dist/antd.css';

const App = () => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: 'US' });

  return (
    <CountryPhoneInput
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
    />
  );
};

export default App;
