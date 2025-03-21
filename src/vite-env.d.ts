/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

declare module '*.yaml' {
    const value: Record<string, any>;
    export default value;
}
declare module '*.yml' {
    const value: Record<string, any>;
    export default value;
}

export type EvnMode = 'dev' | 'staging' | 'production';

export interface ImportMetaEnv {
    // 程序开发需要的配置
    VITE_PORT?: string;
    VITE_DROP_CONSOLE?: 'true' | 'false'; // 是否移除 console 输出
    VITE_DROP_DEBUGGER?: 'true' | 'false'; // 是否移除 debugger 点

    // Vite 插件需要的配置
    VITE_PLUGIN_KEYWORDS: string; // 首页关键词
    VITE_PLUGIN_AUTHOR: string; // 首页作者
    VITE_PLUGIN_DESCRIPTION: string; // 首页描述
    VITE_PLUGIN_NO_SCRIPT_TITLE: string; // 首页不支持脚本提示标题
    VITE_PLUGIN_TITLE: string; // 首页标题
    VITE_PLUGIN_SHOW_DEBUG_SCRIPT: 'true' | 'false'; // 样式显示脚本
    VITE_PLUGIN_LEGACY?: 'true' | 'false';
    VITE_PLUGIN_BUILD_COMPRESS_TYPE?: 'gzip' | 'brotli' | 'none';
    VITE_PLUGIN_BUILD_COMPRESS_DELETE_ORIGIN_FILE?: string;
    VITE_PLUGIN_USE_IMAGEMIN?: 'true' | 'false';
    VITE_PLUGIN_USE_PWA?: 'true' | 'false';
    VITE_PLUGIN_GLOB_APP_TITLE?: string;
    VITE_PLUGIN_GLOB_APP_SHORT_NAME?: string;

    // 代码里面需要使用的配置
    ENV_MODE: EvnMode;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
