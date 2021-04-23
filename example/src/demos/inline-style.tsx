import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => (
  <ConfigProvider locale="ja">
    <CountryPhoneInput inline defaultValue={{ short: 'JP' }} />
  </ConfigProvider>
);

export default App;
