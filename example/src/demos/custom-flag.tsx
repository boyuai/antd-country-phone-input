import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import zhTW from 'world_countries_lists/data/zh-tw/world.json';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

// You could use any flag package you like.
// example: npm install flagpack
import 'flagpack/dist/flagpack.css';

const App = () => {
  return (
    <>
      <ConfigProvider
        locale={zhTW}
        areaMapper={(area) => {
          return {
            ...area,
            emoji: <span className={`fp ${area.short.toLowerCase()}`} />,
          };
        }}
      >
        <CountryPhoneInput defaultValue={{ short: 'TW' }} />
      </ConfigProvider>
      <ConfigProvider
        locale={zhTW}
        areaMapper={(area) => {
          return {
            ...area,
            emoji: (
              <img
                alt="flag"
                style={{ width: 18, height: 18, verticalAlign: 'sub' }}
                src={
                  // Dumi(our doc site generator) can not bundle this kind of assets currently, but it works in CRA project.
                  require(`world_countries_lists/flags/24x24/${area.short.toLowerCase()}.png`)
                    .default
                }
              />
            ),
          };
        }}
      >
        <CountryPhoneInput
          style={{ marginTop: 8 }}
          defaultValue={{ short: 'TW' }}
        />
      </ConfigProvider>
    </>
  );
};

export default App;
