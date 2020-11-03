import React from 'react';
import { Button, Form } from 'antd';
import CountryPhoneInput from './modules';

import './index.css';

const App = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: 400, height: 300, margin: 40 }}
    >
      <Form.Item name="phone">
        <CountryPhoneInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
