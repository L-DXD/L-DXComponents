// vite.config.js
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';

export default defineConfig({

    root: 'src',
    resolve: {
        alias: { // 기본 디렉토리 정의
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: { // 개발 서버 포트 설정
        port: 7600,
    },
    define: {
        'process.env.VERSION': JSON.stringify(process.env.npm_package_version),
    },
    build: {
        outDir: '../dist',
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name]-v${process.env.npm_package_version}.js`,
                chunkFileNames: `assets/[name]-[hash]-v${process.env.npm_package_version}.js`,
                assetFileNames: ({ name }) => {
                    if (name.endsWith('.css')) {
                        return `assets/[name]-v${process.env.npm_package_version}.css`;
                    }
                    return 'assets/[name]';
                },
            },
        },
        // console.log 제거
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            include: ['src/**/*'],
        })
    ]
});