import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_views";
import PrivateRoute from "../../features/auth/components/private_route";
import PublicRoute from "../../features/auth/components/public_route";
import LoginView from "../../features/auth/views/login/views/login_view";
import App_navMovie from "../app_navMovie/app_navMovie";
import App_footerMovie from "../app_footerMovie/app_footerMovie";

//import app_navMovie from "../components/app_navMovie/app_navMovie";
//import app_footerMovie from "../components/app_footerMovie/app_footerMovie";




export const appRouter = createBrowserRouter([

    {
        path: "/",
        element: (
            <PrivateRoute>
                <HomeView />
            </PrivateRoute>
        ),
    },
    {
        path: "/login",
        element: (
            <PublicRoute>
                <LoginView />
            </PublicRoute>
        ),
    },
    // 404
    {
        path: "*",
        element: <div>No se encontro la pagina</div>,
    },
]);