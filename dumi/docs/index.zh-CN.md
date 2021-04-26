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
npm install antd-country-phone-input world_countries_lists
```
或者
```bash
yarn add antd-country-phone-input world_countries_lists
```

## 使用

> **Breaking Changes:**
> 1. 为了避免业务项目中不必要的二次封装，`4.0` 将经过翻译/处理的地区状态提升到了 `ConfigProvider` 中（基于 React Context）。在使用组件时需要在 App 入口挂载 `ConfigProvider`，挂载后内部即可使用相同的配置。
> 2. `4.1` 将翻译数据库 `world_countries_lists` 暴露出来，从而支持 `Tree Shaking` 以及更高级的自定义翻译，这会比 `ConfigProvider` 的 `areaMapper` 运行时修改更直接。

``` tsx | pure
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/en/world.json';

// 通常只需要在 App.js/App.tsx 中引入一次 ConfigProvider 和 CSS
// 请留意 CSS 的引入顺序，否则可能会有样式不正常的问题
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const App = () => {
  return (
    <ConfigProvider locale={en}>
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

### Locale

请参考 [`world_countries_lists`](https://github.com/stefangabos/world_countries)

### Example

https://github.com/boyuai/antd-country-phone-input/tree/master/example

## 谁在使用？

伯禹教育：https://www.boyuai.com/login/
