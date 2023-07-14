import { PluginOption } from 'vite';

import pluginContent from '@originjs/vite-plugin-content';

export function viteContent(): PluginOption[] {
    return [pluginContent()];
}
