import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { setLanguage } from '@/locale';
import routes from '@/routes';
import './assets/css/app.css';
import { useWebsiteStore } from './store/website';

function App() {
    // 初始化语言
    const current = useWebsiteStore((s) => s.language);
    useEffect(() => setLanguage(current), []);
    // 初始化路由
    const views = useRoutes(routes);

    return <>{views}</>;
}

export default App;
