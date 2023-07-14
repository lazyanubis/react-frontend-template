import type { PluginOption } from 'vite';

import { ImportMetaEnv } from '../../../src/vite-env';

import react from '@vitejs/plugin-react-swc';

export const createVitePlugins = (_metaEvn: ImportMetaEnv, _isBuild: boolean) => {
    // const {
    //     VITE_BUILD_COMPRESS: compressType,
    //     VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: shouldBuildCompressDeleteFile,
    //     VITE_USE_IMAGEMIN: shouldUseImagemin,
    // } = metaEvn;

    const vitePlugins: (PluginOption | PluginOption[])[] = [];

    vitePlugins.push(react());

    return vitePlugins;
};
