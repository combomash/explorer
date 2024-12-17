import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';
import {defineConfig} from 'vite';
import dtsPlugin from 'vite-plugin-dts';
import * as packageJson from './package.json';

export default defineConfig({
    plugins: [
        react(),
        dtsPlugin({
            include: ['src/components/'],
        }),
    ],
    build: {
        lib: {
            entry: resolve('src', 'components/index.ts'),
            name: 'Explorer',
            formats: ['es', 'umd'],
            fileName: format => `explorer.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
        },
    },
});
