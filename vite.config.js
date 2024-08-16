import { defineConfig } from 'vite'
import * as glob from 'glob';
import path, { resolve } from 'node:path';
//import { fileURLToPath } from 'node:url';

export default defineConfig({
    build: {
        rollupOptions: {
            input: Object.fromEntries(
                [...glob.sync('./!(dist)/*.html').map(file => [
                    file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
                ]),
                ...glob.sync('./*.html').map(file => [
                    file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
                ])]
            ),
        },
    },
})