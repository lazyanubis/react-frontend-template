import { useCallback } from 'react';
import { useTranslation as _useTranslation } from 'react-i18next';

import { get_current_locale } from '@/locales';

export const useTransaction = (): ((key: string) => string) => {
    const { t: translate } = _useTranslation();

    const t = useCallback(
        (key: string) => {
            const value = translate(key);
            if (!value || key === value) {
                console.error(
                    `can not find multi-language value for key '${key}' with ${get_current_locale()} environment. Check please.`,
                );
            }
            return value;
        },
        [translate],
    );

    return t;
};
