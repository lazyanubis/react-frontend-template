import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { SupportedLanguage } from '@/types/locales';

import commonLanguages from './langs/common';
import en from './langs/en';
import zhCN from './langs/zh-CN';
import { setHtmlPageLang } from './locales';

let current = 'en';
export const get_current_locale = () => current;

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    ...en,
                    ...commonLanguages,
                },
            },
            'zh-CN': {
                translation: {
                    ...zhCN,
                    ...commonLanguages,
                },
            },
        },
        lng: current,
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
    });

export const setLanguage = (language: SupportedLanguage) => {
    i18n.changeLanguage(language);
    setHtmlPageLang(language);
    current = language;
};

export default i18n;
