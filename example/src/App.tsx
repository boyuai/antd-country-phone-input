/* eslint-disable no-console */
import { Button, Card, Form } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import CountryPhoneInput, {
  CountryPhoneInputValue,
} from 'antd-country-phone-input';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';
import { useState } from 'react';

const cardStyle = { marginBottom: 6 };

const App = () => {
  const onFinish = (values: any) => {
    console.log('onFinish:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('onFinishFailed:', errorInfo);
  };

  const [value, setValue] = useState<CountryPhoneInputValue>({ short: 'CN' });

  return (
    <>
      <Card type="inner" title="Basic Usage" style={cardStyle}>
        <CountryPhoneInput
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
        />
      </Card>
      <Card type="inner" title="Inline Style" style={cardStyle}>
        <CountryPhoneInput inline />
      </Card>
      <Card type="inner" title="Chinese Version" style={cardStyle}>
        <CountryPhoneInput
          locale="zh"
          selectProps={{
            filterArea: (area) => area.zh?.includes('中国') || false,
          }}
        />
      </Card>
      <Card type="inner" title="Controlled by Form" style={cardStyle}>
        <Paragraph>
          <blockquote>
            value(even undefined) is completely controlled by form.
          </blockquote>
        </Paragraph>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            normal: {
              short: 'US',
            },
            undefined: undefined,
          }}
        >
          <Form.Item name="normal">
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
      </Card>
    </>
  );
};

export default App;
