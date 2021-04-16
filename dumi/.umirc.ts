import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'antd-country-phone-input',
  favicon: 'https://staticcdn.boyuai.com/user-assets/6074/vF5on4266Geu54q8dM7mEU/Lark20200122-235918.svg',
  logo: 'https://staticcdn.boyuai.com/user-assets/6074/vF5on4266Geu54q8dM7mEU/Lark20200122-235918.svg',
  outputPath: 'docs-dist',
  mode: 'doc',
  hash: true,
  dynamicImportSyntax: {},
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  hire: {
    title: '招人啦',
    content: `
<p style="margin-bottom: 24px">
  <span>本项目由「上海伯禹教育科技有限公司」维护，我们正在招聘前端开发工程师，如果你感兴趣的话，欢迎投递简历！</span>
  <a href="https://m.zhipin.com/mpa/html/weijd/weijd-job/cfe01449fd6055600nJ63N-0EVM~?date8=20210416&sid=tosee_jd_d1f30da687d63eb53ndy29i6F1c~">
  查看 JD
  </a>
</p>
    `,
    email: 'helsonxiao@gmail.com',
    slogan: '正在找工作？',
  },
  // more config: https://d.umijs.org/config
});
