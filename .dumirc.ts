// .dumirc.ts
import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'react-antd-xform',
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide' },
      ],
    },
  },

  // ✅ 路由模式
  history: {
    type: 'hash',
  },

  base: '/',
  publicPath: '/',
});
