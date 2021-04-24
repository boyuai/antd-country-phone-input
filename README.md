# antd-country-phone-input

Country phone input component as standard Ant.Design form item.

[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) [![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] <!-- [![build status][github-actions-image]][github-actions-url] -->

[npm-image]: http://img.shields.io/npm/v/antd-country-phone-input.svg?style=flat-square
[npm-url]: http://npmjs.org/package/antd-country-phone-input
[download-image]: https://img.shields.io/npm/dm/antd-country-phone-input.svg?style=flat-square
[download-url]: https://npmjs.org/package/antd-country-phone-input
<!-- [github-actions-image]: https://github.com/boyuai/antd-country-phone-input/workflows/CI/badge.svg
[github-actions-url]: https://github.com/boyuai/antd-country-phone-input/actions -->

![Preview](https://staticcdn.boyuai.com/user-assets/6074/DvBU2V96oXmxMQ45rrnKUb/2021416-171631.png!png)

## Installation

```bash
npm install antd-country-phone-input
```
or
```bash
yarn add antd-country-phone-input
```

## Usage

> **Breaking Changes:** To avoid unnecessary encapsulation for different locales, `4.0` lifted areas state up to `ConfigProvider`(based on React Context).

```tsx | pure
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';

// Usually you only need to import ConfigProvider & CSS once in App.js/App.tsx
// CSS order is important!
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => {
  return (
    <ConfigProvider locale="zh">
      <CountryPhoneInput />
    </ConfigProvider>
  );
};

export default App;
```

### Value

| Field | Type | Note |
| --- | ---- | --- |
| short | string | See [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
| phoneCode | number |
| emoji | ReactNode | National flag
| name | string |

### Locale

Please check the typescript definition in [source codes](https://github.com/boyuai/antd-country-phone-input/blob/master/src/third-party.ts).
