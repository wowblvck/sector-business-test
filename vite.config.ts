import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@layouts': resolve(__dirname, './src/layouts'),
      '@pages': resolve(__dirname, './src/pages'),
      '@api': resolve(__dirname, './src/api'),
      '@interfaces': resolve(__dirname, './src/interfaces'),
      '@store': resolve(__dirname, './src/store'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@constants': resolve(__dirname, './src/constants'),
    },
  },
});
