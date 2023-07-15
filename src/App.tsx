import { useEffect } from 'react';
import { setLanguage } from '@/locale';
import './assets/css/app.css';
import Test from './components/test';
import { useWebsiteStore } from './store/website';

function App() {
    // 初始化语言
    const current = useWebsiteStore((s) => s.language);
    useEffect(() => setLanguage(current), []);

    return (
        <>
            <Test />
        </>
    );
}

export default App;
