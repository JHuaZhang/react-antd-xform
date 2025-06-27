export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'configure',
      order: [
        // 第一级分组
        'XForm',
        // 第二级子分组顺序
        ['基本用法', '表单联动'],
      ],
      locales: 'zh-CN',
    },
  },
};
