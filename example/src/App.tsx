import { Button, Card, Form } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import CountryPhoneInput from 'antd-country-phone-input';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const cardStyle = { marginBottom: 6 };

const App = () => {
  const onFinish = (values: any) => {
    console.log('onFinish:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('onFinishFailed:', errorInfo);
  };

  return (
    <>
      <Card type="inner" title="Basic Usage" style={cardStyle}>
        <CountryPhoneInput />
      </Card>
      <Card type="inner" title="Inline Style" style={cardStyle}>
        <CountryPhoneInput inline />
      </Card>
      <Card type="inner" title="Chinese Version" style={cardStyle}>
        <CountryPhoneInput locale="zh" />
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
          style={{ width: 400, height: 300, margin: 40 }}
          initialValues={{
            normal: {
              short: 'CA',
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
