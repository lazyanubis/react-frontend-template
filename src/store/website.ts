import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { setLanguage } from '@/locale';
import { SupportedLanguage } from '@/types/model';

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

isDev && mountStoreDevtool('WebsiteStore', useWebsiteStore);
