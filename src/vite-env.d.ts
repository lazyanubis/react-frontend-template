/// <reference types="vite/client" />

export type EvnMode = 'dev' | 'staging' | 'production';

export interface ImportMetaEnv {
    // 程序开发需要的配置
    VITE_PORT?: string;
    VITE_DROP_CONSOLE?: string; // 是否移除 console 输出
    VITE_DROP_DEBUGGER?: string; // 是否移除 debugger 点

    // Vite 插件需要的配置
    // VITE_USE_MOCK: boolean;
    // VITE_USE_PWA: boolean;
    // VITE_PUBLIC_PATH: string;
    // VITE_PROXY: [string, string][];
    // VITE_GLOB_APP_TITLE: string;
    // VITE_GLOB_APP_SHORT_NAME: string;
    // VITE_USE_CDN: boolean;
    // VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    // VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    // VITE_LEGACY?: boolean;
    // VITE_USE_IMAGEMIN: boolean;
    // VITE_GENERATE_UI: string;
    // VITE_SHOW_DEBUG_SCRIPT: boolean;
    // INDEX_KEYWORDS: string; // 首页关键词
    // INDEX_AUTHOR: string; // 首页作者
    // INDEX_DESCRIPTION: string; // 首页描述
    // INDEX_NO_SCRIPT_TITLE: string; // 首页不支持脚本提示标题
    // INDEX_TITLE: string; // 首页标题

    // 代码里面需要使用的配置
    ENV_MODE: EvnMode;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
