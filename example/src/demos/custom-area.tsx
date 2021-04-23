import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => {
  return (
    <ConfigProvider
      locale="zh"
      areaFilter={(area) => area.name!.includes('中国')}
      areaMapper={(area) => {
        if (area.name?.includes('台湾')) {
          return {
            ...area,
            name: '中国台湾',
            emoji: '🇨🇳',
          };
        }
        return area;
      }}
    >
      <CountryPhoneInput />
    </ConfigProvider>
  );
};

export default App;
