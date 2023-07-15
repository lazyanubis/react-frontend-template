import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'antd/es/date-picker';
import { t } from '@/locale';
import { useBearStore } from '@/store/bear';
import { useWebsiteStore } from '@/store/website';
import { add } from '@/test/common';
import reactLogo from '../../assets/react.svg';
import Test2 from './index2';
import './index.less';
import viteLogo from '/vite.svg';

export default () => {
    const [count, setCount] = useState(0);

    const increase = useBearStore((state) => state.increase);

    const language = useWebsiteStore((state) => state.language);
    const changeLanguage = useWebsiteStore(
        (state) => () => state.setLanguage(language === 'en' ? 'zh-CN' : 'en'),
    );

    const { t: tt } = useTranslation();

    const n = add(111, 2);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            {n}
            <div className="test-text text-3xl font-bold underline">Test Tailwind</div>
            <DatePicker />
            <hr />
            <Test2 />
            <button onClick={() => increase(2)}>add 2</button>
            <button onClick={changeLanguage}>Change Language</button>
            <div>{language}</div>
            <div>{t('test.test')}</div>
            <div>{tt('test.test')}</div>
            <div>{tt('test.test2')}</div>
        </>
    );
};
