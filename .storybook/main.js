module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      // 添加 React18兼容配置
      legacyRootApi: true
    }
  },
  core: {
    disableTelemetry: true
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: 'window',
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include || []),
          'mobx',
          'mobx-react-lite'
        ]
      }
    };
  }
};
