import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['**/__tests__/**', '**/stories/**'],
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: false, // 可选：关闭minify保留变量名利于Tree Shaking
    lib: {
      entry: 'src/index.ts',
      formats: ['es'], // 只生成ES模块格式
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'mobx',
        'mobx-react',
        'styled-components',
        'antd',
        /@storybook\/.+/,
      ],
      output: {
        // 关键配置：保留模块结构
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: ({ name: fileName }) => {
          // 保持原始文件名结构
          return `${fileName}.js`;
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          mobx: 'mobx',
          'mobx-react': 'mobxReact',
          'styled-components': 'styled',
          antd: 'antd',
        },
        exports: 'named',
      },
    },
  },
});
