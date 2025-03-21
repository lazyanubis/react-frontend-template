import { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

import { ImportMetaEnv } from '../src/vite-env';

export function viteHtmlPlugins(metaEnv: ImportMetaEnv, isBuild: boolean): PluginOption[] {
    return createHtmlPlugin({
        minify: true,
        // entry: 'src/main.ts',
        // template: 'public/index.html',
        inject: {
            data: {
                keywords: metaEnv.VITE_PLUGIN_KEYWORDS,
                author: metaEnv.VITE_PLUGIN_AUTHOR,
                description: metaEnv.VITE_PLUGIN_DESCRIPTION,
                noScriptTitle: metaEnv.VITE_PLUGIN_NO_SCRIPT_TITLE,
                title: metaEnv.VITE_PLUGIN_TITLE,
                debugScript:
                    !isBuild || metaEnv.VITE_PLUGIN_SHOW_DEBUG_SCRIPT === 'true'
                        ? '<script src="/spacingjs.js" defer></script>' // 开发模式可以注入这个看尺寸的工具
                        : '',
            },
            tags: [
                // {
                //   injectTo: 'body-prepend',
                //   tag: 'div',
                //   attrs: {
                //     id: 'tag',
                //   },
                // },
            ],
        },
    }) as unknown as PluginOption[];
}
