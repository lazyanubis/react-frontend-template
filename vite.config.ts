import { defineConfig, loadEnv, UserConfig } from 'vite';
import * as path from 'path';

import { ImportMetaEnv } from './src/vite-env';

import { createVitePlugins } from './build/vite/plugins';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    console.log('command ->', command);
    console.log('mode ->', mode);

    const readEnv = loadEnv(mode, './env');
    // @ts-ignore force transform, not a bit problem for string variable
    const metaEvn: ImportMetaEnv = readEnv; // 导入设置的环境变量，会根据选择的 mode 选择文件
    console.error('metaEvn -> ', metaEvn); // 输出加载的环境变量
    // but matters other types

    // port
    let port = parseInt(metaEvn.VITE_PORT ?? '3000');
    if (isNaN(port)) port = 3000;
    console.log('port ->', port);

    const isBuild = mode === 'production';

    // console and debugger
    const drop_console = isBuild || metaEvn.VITE_DROP_CONSOLE === 'true';
    const drop_debugger = isBuild || metaEvn.VITE_DROP_DEBUGGER === 'true';

    const common: UserConfig = {
        publicDir: 'public', // 该目录下文件会原封不动存放至 dist
        mode, // 运行模式
        plugins: [...createVitePlugins(metaEvn, isBuild)], // 插件
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'), // @符号要解析
            },
            extensions: ['.js', '.ts', '.jsx', '.tsx'], // import 可以省略的拓展名
        },
        build: {
            minify: isBuild ? 'terser' : false, // 默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%
            terserOptions: isBuild && {
                compress: {
                    drop_console, // 生产环境去除 console
                    drop_debugger, // 生产环境去除 debugger
                },
            },
        },
        envDir: 'env',
        envPrefix: ['ENV'],
        clearScreen: false,
    };

    if (!isBuild) {
        return {
            // serve 独有配置 开发模式
            ...common,
            server: {
                hmr: true, // 热更新
                proxy: {
                    '/api': {
                        target: 'http://localhost',
                        changeOrigin: true,
                        rewrite: (path) => path,
                    },
                },
                cors: true,
                host: '0.0.0.0',
                port,
            },
        };
    } else {
        return {
            // build 独有配置 生产模式
            ...common,
        };
    }
});
