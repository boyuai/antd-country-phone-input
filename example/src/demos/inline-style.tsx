import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import ja from 'world_countries_lists/data/countries/ja/world.json';
import '// antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => (
  <ConfigProvider locale={ja}>
    <CountryPhoneInput inline defaultValue={{ short: 'JP' }} />
  </ConfigProvider>
);

export default App;
