import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import PrivateRoute from "../components/PrivateRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "products",
                element: <ProductPage />,
            },
            {
                path: "products/:id",
                element: <ProductDetailPage />,
            },
        ],
    },
    {
        path: "admin",
        element: <PrivateRoute>
            <AdminLayout />
        </PrivateRoute>
        ,
        children: [
            {
                path: "",
                element: <div>Admin Dashboard</div>,
            },
            {
                path: "users",
                element: <div>Manage Users</div>,
            },
            {
                path: "settings",
                element: <div>Admin Settings</div>,
            },
        ],
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "register",
        element: <RegisterPage />,
    },
]);

export default router;
