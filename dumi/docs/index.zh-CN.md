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

> **Breaking Changes:** 为了更好的性能，同时避免业务项目中不必要的二次封装，从 4.0 开始舍弃了 `CountryPhoneInput` 的 `locale` 等定制参数，需要在 App 入口包装一层 `ConfigProvider`。

``` tsx | pure
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';

// 通常只需要在 App.js/App.tsx 中引入一次 ConfigProvider 和 CSS
// 请留意 CSS 的引入顺序，否则可能会有样式不正常的问题
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

| 字段 | 类型 | 备注 |
| --- | ---- | --- |
| short | string | 请参考 [ISO 3166-1](https://zh.wikipedia.org/wiki/ISO_3166-1%E4%BA%8C%E4%BD%8D%E5%AD%97%E6%AF%8D%E4%BB%A3%E7%A0%81)
| phoneCode | number |
| emoji | ReactNode | 默认为国旗 emoji，支持自定义
| name | string |

## 支持哪些语言？

请参考[源代码](https://github.com/boyuai/antd-country-phone-input/blob/master/src/third-party.ts)中的类型定义。
