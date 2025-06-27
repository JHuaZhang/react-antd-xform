import { addons } from '@storybook/manager-api';

addons.setConfig({
  theme: {
    brandTitle: 'react-antd-xform', //修改左侧标题
    brandUrl: '/', // 点击标题跳转链接
    brandImage:'',
    brandTarget: '_self', // 链接打开方式
  },
});
