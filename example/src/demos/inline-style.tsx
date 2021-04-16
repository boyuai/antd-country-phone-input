import CountryPhoneInput from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <CountryPhoneInput inline locale="ja" defaultValue={{ short: 'JP' }} />
  );
};

export default App;
