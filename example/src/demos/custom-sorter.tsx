import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => {
  return (
    <ConfigProvider
      locale={en}
      areaSorter={(a, b) => {
        if (a.name && b.name) {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        return 0;
      }}
    >
      <CountryPhoneInput />
    </ConfigProvider>
  );
};

export default App;
