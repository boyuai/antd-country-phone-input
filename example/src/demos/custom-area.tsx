import CountryPhoneInput from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <CountryPhoneInput
      locale="zh"
      selectProps={{
        filterArea: (area) => area.name?.includes('中国') || false,
        areaProcessor: (area) => {
          if (area.name?.includes('台湾')) {
            return {
              ...area,
              name: '中国台湾',
              emoji: '🇨🇳',
            };
          }
          return area;
        },
      }}
    />
  );
};

export default App;
