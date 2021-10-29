import { Card } from 'antd';

import BasicUsage from './demos/basic-usage';
import LiteVersion from './demos/lite-version';
import InlineStyle from './demos/inline-style';
import CustomArea from './demos/custom-area';
import CustomFlag from './demos/custom-flag';
import AntdForm from './demos/antd-form';

const cardStyle = { marginBottom: 6 };

const App = () => {
  return (
    <>
      <Card type="inner" title="Basic Usage" style={cardStyle}>
        <BasicUsage />
      </Card>
      <Card type="inner" title="Inline Style" style={cardStyle}>
        <InlineStyle />
      </Card>
      <Card type="inner" title="Antd Form" style={cardStyle}>
        <AntdForm />
      </Card>
      <Card type="inner" title="Custom Area" style={cardStyle}>
        <CustomArea />
      </Card>
      <Card type="inner" title="Custom Flag" style={cardStyle}>
        <CustomFlag />
      </Card>
      <Card type="inner" title="Lite Version(without antd)" style={cardStyle}>
        <LiteVersion />
      </Card>
    </>
  );
};

export default App;
