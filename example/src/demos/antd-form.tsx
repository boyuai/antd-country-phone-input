import { Button, Form, message } from 'antd';
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';

import 'antd-country-phone-input/dist/index.css';

const App = () => {
  const onFinish = (values: any) => {
    message.info(`onFinish: ${values && JSON.stringify(values)}`);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.info(`onFinishFailed: ${errorInfo && JSON.stringify(errorInfo)}`);
  };

  return (
    <ConfigProvider locale={en}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          name="lowerCase"
          initialValue={{
            short: 'us',
          }}
        >
          <CountryPhoneInput />
        </Form.Item>
        <Form.Item name="undefined" initialValue={undefined}>
          <CountryPhoneInput placeholder="initialValue is undefined" />
        </Form.Item>
        <Form.Item name="ignored">
          <CountryPhoneInput placeholder="initialValue is ignored" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </ConfigProvider>
  );
};

export default App;
