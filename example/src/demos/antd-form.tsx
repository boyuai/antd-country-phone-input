import { Button, Form, message } from 'antd';
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => {
  const onFinish = (values: any) => {
    message.info(`onFinish: ${values && JSON.stringify(values)}`);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.info(`onFinishFailed: ${errorInfo && JSON.stringify(errorInfo)}`);
  };

  return (
    <ConfigProvider>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          lowerCase: {
            short: 'us',
          },
          undefined: undefined,
        }}
      >
        <Form.Item name="lowerCase">
          <CountryPhoneInput />
        </Form.Item>
        <Form.Item name="undefined">
          <CountryPhoneInput />
        </Form.Item>
        <Form.Item name="ignored">
          <CountryPhoneInput />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </ConfigProvider>
  );
};

export default App;
