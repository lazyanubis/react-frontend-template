/// <reference types="vite/client" />

export type EvnMode = 'dev' | 'staging' | 'production';

export interface ImportMetaEnv {
    // 程序开发需要的配置
    VITE_PORT?: string;
    VITE_DROP_CONSOLE?: string; // 是否移除 console 输出
    VITE_DROP_DEBUGGER?: string; // 是否移除 debugger 点

    // Vite 插件需要的配置
    VITE_PLUGIN_KEYWORDS: string; // 首页关键词
    VITE_PLUGIN_AUTHOR: string; // 首页作者
    VITE_PLUGIN_DESCRIPTION: string; // 首页描述
    VITE_PLUGIN_NO_SCRIPT_TITLE: string; // 首页不支持脚本提示标题
    VITE_PLUGIN_TITLE: string; // 首页标题
    VITE_PLUGIN_SHOW_DEBUG_SCRIPT: string; // 样式显示脚本
    VITE_PLUGIN_BUILD_COMPRESS_TYPE?: 'gzip' | 'brotli' | 'none';
    VITE_PLUGIN_BUILD_COMPRESS_DELETE_ORIGIN_FILE?: string;
    VITE_PLUGIN_USE_IMAGEMIN?: string;
    VITE_PLUGIN_USE_PWA?: string;
    VITE_PLUGIN_GLOB_APP_TITLE?: string;
    VITE_PLUGIN_GLOB_APP_SHORT_NAME?: string;
    // VITE_PUBLIC_PATH: string;
    // VITE_PROXY: [string, string][];
    // VITE_USE_CDN: boolean;
    // VITE_LEGACY?: boolean;
    // VITE_GENERATE_UI: string;

    // 代码里面需要使用的配置
    ENV_MODE: EvnMode;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
