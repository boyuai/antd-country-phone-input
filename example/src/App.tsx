/* eslint-disable no-console */
import { useState } from 'react';
import { Button, Card, Form } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import 'antd/dist/antd.css';

import CountryPhoneInput, {
  CountryPhoneInputValue,
} from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';

// You could use any flag package you like.
import 'flagpack/dist/flagpack.css';

const cardStyle = { marginBottom: 6 };

const App = () => {
  const onFinish = (values: any) => {
    console.log('onFinish:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('onFinishFailed:', errorInfo);
  };

  const [value, setValue] = useState<CountryPhoneInputValue>({ short: 'US' });

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
        <CountryPhoneInput inline locale="ja" defaultValue={{ short: 'JP' }} />
      </Card>
      <Card type="inner" title="Chinese Version" style={cardStyle}>
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
      </Card>
      <Card type="inner" title="Taiwan Version" style={cardStyle}>
        <Paragraph>
          <blockquote>Emoji is replaced by third party flags.</blockquote>
        </Paragraph>
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
      </Card>
      <Card type="inner" title="Controlled by Form" style={cardStyle}>
        <Paragraph>
          <blockquote>
            Value(even undefined) is completely controlled by ant design form.
          </blockquote>
        </Paragraph>
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
      </Card>
    </>
  );
};

export default App;
