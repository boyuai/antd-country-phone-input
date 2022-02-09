import { useState } from 'react';

import {
  ConfigProvider,
  CountryPhoneInputValue,
  CountryPhoneInput,
} from 'antd-country-phone-input/dist/lite';
import en from 'world_countries_lists/data/countries/en/world.json';
// If you're writing styles with less, this could be a starter for you.
import 'rc-select/assets/index.less';

const App = () => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: 'US' });

  return (
    <ConfigProvider locale={en}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CountryPhoneInput
          style={{ height: 24 }}
          selectProps={{ style: { height: 24 } }}
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
        />
      </div>
    </ConfigProvider>
  );
};

export default App;
