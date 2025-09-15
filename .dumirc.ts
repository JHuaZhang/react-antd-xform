import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'],
  // 输出目录
  outputPath: 'docs-dist',
  // 使用 hash 模式的路由，常用于静态站点部署或避免历史路由问题
  history: {
    type: 'hash',
  },
  // 站点的基础路径，如果你的站点要部署在非根路径下，需要修改此选项，例如 '/my-project/'
  base: '/',
  // 设置公共路径，通常用于指定静态资源的基础路径
  publicPath: '/',
  // 主题配置是 dumi-theme-antd的核心配置区域
  title: 'react-antd-xform',
  themeConfig: {
    // 站点名称，会显示在导航栏和浏览器标签页上
    name: 'react-antd-xform',
    // 站点 logo，会显示在导航栏左上角
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
    // 站点描述，可用于SEO和首页展示
    description: '基于 React + Ant Design 的表单解决方案',
    // 导航栏配置，使用数组形式
    nav: [{ title: '介绍', link: '/introduction' }],

    // 配置社交链接，例如 GitHub
    socialLinks: {
      github: 'https://github.com/JHuaZhang/react-antd-xform',
    },

    // 配置页脚内容，支持 HTML 字符串
    footer: 'Copyright © 2025 react-antd-xform',

    // 配置主题偏好，允许用户切换亮色/暗色主题，默认提供 'auto'（自动）, 'light'（亮色）, 'dark'（暗色）选项
    // prefersColor: { default: 'auto', switch: true },
  },

  // 如果需要对默认主题的样式进行细微调整，可以使用 styles 配置项注入全局样式
  styles: [
    `.dumi-default-header-left {
      width: 280px !important;
    }`,
    `你的其他自定义样式`,
  ],
  // 如果需要对 Ant Design 组件样式进行主题定制，可以使用 theme 配置项
  /*
  theme: {
    '@c-primary': '#your-primary-color', // 定制主色调
  },
  */
});
