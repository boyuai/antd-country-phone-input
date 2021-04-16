/* eslint-disable no-console */
import { Button, Form, message } from 'antd';
import CountryPhoneInput from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';
import 'antd/dist/antd.css';

const App = () => {
  const onFinish = (values: any) => {
    message.info(`onFinish: ${values && JSON.stringify(values)}`);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.info(`onFinishFailed: ${errorInfo && JSON.stringify(errorInfo)}`);
  };

  return (
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
  );
};

export default App;
