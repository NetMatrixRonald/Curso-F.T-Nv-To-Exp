
import { createBrowserRouter, Navigate } from "react-router";
import AboutPage from "../pages/about/aboutPage";
import ProfilePage from "../profile/ProfilePage";
import LoginPage from "../pages/auth/LoginPage";

export const AppRouter = createBrowserRouter([
    {
            path: '/about',
            element: <AboutPage/>
    },
    {
         path: '/profile',
        element: <ProfilePage/>
    },
    {
         path: '/login',
        element: <LoginPage/>
    },
    {
        path: '*',
        element: <Navigate to="/about" />
    }
])
