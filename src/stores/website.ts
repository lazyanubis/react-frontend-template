import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { SupportedLanguage } from '@/types/locales';
import { setLanguage } from '@/locales';

const isDev = import.meta.env.DEV;

interface WebsiteState {
    language: SupportedLanguage;
    setLanguage: (language: SupportedLanguage) => void;
}

export const useWebsiteStore = create<WebsiteState>()(
    devtools(
        persist(
            (set) => ({
                language: 'en',
                setLanguage: (language: SupportedLanguage) =>
                    set(() => {
                        setLanguage(language);
                        return { language };
                    }),
            }),
            {
                name: 'website-storage',
            },
        ),
        {
            enabled: isDev,
        },
    ),
);

if (isDev) mountStoreDevtool('WebsiteStore', useWebsiteStore);
