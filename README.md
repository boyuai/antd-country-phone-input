# antd-country-phone-input

Country phone input component as standard Ant.Design form item.

[![dumi][dumi-image]][dumi-url] [![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![build status][github-actions-image]][github-actions-url]

[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square
[dumi-url]: https://github.com/umijs/dumi
[npm-image]: https://img.shields.io/npm/v/antd-country-phone-input.svg?style=flat-square
[npm-url]: https://npmjs.org/package/antd-country-phone-input
[download-image]: https://img.shields.io/npm/dm/antd-country-phone-input.svg?style=flat-square
[download-url]: https://npmjs.org/package/antd-country-phone-input
[github-actions-image]: https://github.com/boyuai/antd-country-phone-input/workflows/CI/badge.svg
[github-actions-url]: https://github.com/boyuai/antd-country-phone-input/actions

![Preview](https://staticcdn.boyuai.com/user-assets/6074/DvBU2V96oXmxMQ45rrnKUb/2021416-171631.png!png)

## Installation

```bash
npm install antd-country-phone-input world_countries_lists
```
or
```bash
yarn add antd-country-phone-input world_countries_lists
```

## Usage

> **Breaking Changes:**
> 1. To avoid unnecessary encapsulation for different locales, `4.0` lifted areas state up to `ConfigProvider`(based on React Context). You need to put it in the right place(index.js/App.js/...), then all components will have access to the provided config.
> 2. `Tree Shaking` is supported in `4.1`, you need to install `world_countries_lists` explicitly. Thus, you could customize translation JSON and it is better than `areaMapper` in `ConfigProvider`.
> 3. `world_countries_lists` updated their file structure from [2.4.0](https://github.com/stefangabos/world_countries/releases/tag/2.4.0): `world_countries_lists/data/en/world.json` -> `world_countries_lists/data/countries/en/world.json`.

```tsx | pure
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';

// Usually you only need to import ConfigProvider & CSS once in App.js/App.tsx
// CSS order is important!
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

Try it on our website: https://boyuai.github.io/antd-country-phone-input/demos/

### Value

| Field | Type | Note |
| --- | ---- | --- |
| short | string | See [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
| phoneCode | number |
| emoji | ReactNode | National flag
| name | string |

### Locale

See [`world_countries_lists`](https://github.com/stefangabos/world_countries)

### Example

Have a look at [this](https://github.com/boyuai/antd-country-phone-input/tree/master/example)!
