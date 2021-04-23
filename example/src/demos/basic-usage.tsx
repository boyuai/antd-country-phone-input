import { useState } from 'react';

import CountryPhoneInput, {
  CountryPhoneInputValue,
  ConfigProvider,
} from 'antd-country-phone-input';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: 'US' });

  return (
    <ConfigProvider>
      <CountryPhoneInput
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </ConfigProvider>
  );
};

export default App;
