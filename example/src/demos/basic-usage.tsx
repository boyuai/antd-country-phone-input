import { useState } from 'react';

import CountryPhoneInput, {
  CountryPhoneInputValue,
  ConfigProvider,
} from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: 'US' });

  return (
    <ConfigProvider locale={en}>
      <CountryPhoneInput
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
        className="your-custom-class"
      />
    </ConfigProvider>
  );
};

export default App;
