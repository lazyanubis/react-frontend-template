import { Navigate, RouteObject } from 'react-router-dom';
import Test from '@/components/test/index';

const routes: RouteObject[] = [
    {
        path: '/test',
        element: <Test />,
    },
    {
        path: '/',
        element: <Navigate to="/test" />,
    },
];

export default routes;
