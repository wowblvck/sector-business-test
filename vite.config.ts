import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    testTimeout: 10000,
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      provider: 'v8',
      all: true,
      exclude: [
        ...configDefaults.exclude,
        'src/store',
        'src/utils',
        'src/reducers',
        'src/mocks',
        'src/interfaces',
        'src/constants',
        'src/api',
        '**/*.d.ts',
        '**/*.cjs',
        'src/App.tsx',
        'src/main.tsx',
      ],
    },
    deps: {
      inline: ['antd'],
    },
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@layouts': resolve(__dirname, './src/layouts'),
      '@pages': resolve(__dirname, './src/pages'),
      '@api': resolve(__dirname, './src/api'),
      '@interfaces': resolve(__dirname, './src/interfaces'),
      '@store': resolve(__dirname, './src/store'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@constants': resolve(__dirname, './src/constants'),
      '@reducers': resolve(__dirname, './src/reducers'),
      '@utils': resolve(__dirname, './src/utils'),
      '@mocks': resolve(__dirname, './src/mocks'),
      '@tests': resolve(__dirname, './src/tests'),
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('@reduxjs/toolkit') ||
            id.includes('react-redux') ||
            id.includes('redux')
          ) {
            return 'redux';
          }
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'react';
          }
          return null;
        },
      },
    },
  },
});
