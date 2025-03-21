import { useCallback, useState } from 'react';

import { useBearStore } from '@/stores/bear';
import { useWebsiteStore } from '@/stores/website';
import { useTransaction } from '@/hooks/translation';
import Test from '@/components/test';

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

function HomePage() {
    const t = useTransaction();

    const [count, setCount] = useState(0);

    const increase = useBearStore((state) => state.increase);

    const { language, setLanguage } = useWebsiteStore();
    const changeLanguage = useCallback(() => {
        setLanguage(language === 'en' ? 'zh-CN' : 'en');
    }, [language, setLanguage]);

    return (
        <>
            <div className="flex w-full flex-row justify-center">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p className="mt-4">
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <hr />
            <Test />
            <button onClick={() => increase(2)}>add 2</button>
            <button onClick={changeLanguage}>Change Language</button>
            <div>{language}</div>
            <div>{t('test.test')}</div>
            <div>{t('test.test')}</div>
            <div>{t('test.test2')}</div>
        </>
    );
}

export default HomePage;
