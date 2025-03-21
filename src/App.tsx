import { routes } from './routes';

import '@/assets/styles/global.css';
import '@/assets/styles/main.css';

import { useEffect } from 'react';
import { useRoutes } from 'react-router';

function App() {
    // 初始化语言
    const current = useWebsiteStore((s) => s.language);
    useEffect(() => setLanguage(current), []);

    // 初始化路由
    const views = useRoutes(routes);

    return <>{views}</>;
}

export default App;
