import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            components: path.resolve(__dirname, './src/components/'),
            pages: path.resolve(__dirname, './src/pages'),
            interfaces: path.resolve(__dirname, './src/interfaces'),
            consts: path.resolve(__dirname, './src/consts'),
            ui: path.resolve(__dirname, './src/components/ui'),
            utils: path.resolve(__dirname, './src/utils'),
            hooks: path.resolve(__dirname, './src/hooks'),
            api: path.resolve(__dirname, './src/utils/api'),
        },
        extensions: ['.ts', '.tsx'],
    },
});
