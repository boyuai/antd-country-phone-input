# antd-country-phone-input

符合 Ant Design Form 标准的手机号输入组件

[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) [![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] <!-- [![build status][github-actions-image]][github-actions-url] -->

[npm-image]: http://img.shields.io/npm/v/antd-country-phone-input.svg?style=flat-square
[npm-url]: http://npmjs.org/package/antd-country-phone-input
[download-image]: https://img.shields.io/npm/dm/antd-country-phone-input.svg?style=flat-square
[download-url]: https://npmjs.org/package/antd-country-phone-input
<!-- [github-actions-image]: https://github.com/boyuai/antd-country-phone-input/workflows/CI/badge.svg
[github-actions-url]: https://github.com/boyuai/antd-country-phone-input/actions -->

![Preview](https://staticcdn.boyuai.com/user-assets/6074/DvBU2V96oXmxMQ45rrnKUb/2021416-171631.png!png)

## 安装

```bash
npm install antd-country-phone-input
```
或者
```bash
yarn add antd-country-phone-input
```

## 使用

```tsx | pure
import React, { useState } from 'react';
import CountryPhoneInput, {
  CountryPhoneInputValue,
} from 'antd-country-phone-input';

// 通常只需要在 App.js/App.tsx 中引入一次即可
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: 'CN' });

  return (
    <CountryPhoneInput
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
    />
  );
};

export default App;
```
