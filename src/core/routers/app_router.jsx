import { createBrowserRouter } from 'react-router-dom';
import HomeView from '../../features/home/home_view';
import LoginView from '../../features/login/login_view';
import PrivateRoute from '../auth/components/private_route';
import PublicRoute from '../auth/components/public_route';




export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:(
                <PrivateRoute>
                    <HomeView />
                </PrivateRoute>
                    
                ),
    },

    {
        path:"/login",
        element:(
                <PublicRoute>
                     <LoginView />  
                </PublicRoute>
                ) 
    },

    {
        path: "*",
        element: <div><h1>Lo sentimos mucho, no se encontró la página</h1></div>,
    }

]);