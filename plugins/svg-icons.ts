import path from 'path';
import type { Plugin } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export function svgIconsPlugin(isBuild: boolean) {
    const svgIconsPlugin = createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        svgoOptions: isBuild,
        // default
        symbolId: 'icon-[dir]-[name]',
    });
    return svgIconsPlugin as unknown as Plugin;
}
