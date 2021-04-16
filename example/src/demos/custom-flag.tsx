import CountryPhoneInput from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';
import 'antd/dist/antd.css';
// You could use any flag package you like.
import 'flagpack/dist/flagpack.css';

const App = () => {
  return (
    <CountryPhoneInput
      locale="zh-tw"
      defaultValue={{ short: 'TW' }}
      selectProps={{
        areaProcessor: (area) => {
          return {
            ...area,
            emoji: <span className={`fp ${area.short.toLowerCase()}`} />,
          };
        },
      }}
    />
  );
};

export default App;
