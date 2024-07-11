import react from '@vitejs/plugin-react';
import path from 'node:path';
import url from 'node:url';
import { defineConfig } from 'vite';

// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
const __filename = url.fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/shared/components/UI'),
      '@api': path.resolve(__dirname, './src/shared/utils/api'),
      '@redux': path.resolve(__dirname, './src/shared/utils/redux'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@consts': path.resolve(__dirname, './src/shared/consts'),
      '@components': path.resolve(__dirname, './src/shared/components/')
    }
  },
  plugins: [react()]
});
