import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ProductManagementPage from "../pages/ProductManagementPage.jsx";
import PrivateRoute from "../components/PrivateRoute.jsx";
import UserManagementPage from "../pages/UserManagementPage.jsx";
import OrderManagementPage from "../pages/OrderManagementPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";

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
        element: <PrivateRoute>  <AdminLayout />  </PrivateRoute>,
        children: [
            {
                path: "",
                element: <DashboardPage />,
            },
            {
                path: "users",
                element: <UserManagementPage />,
            },
            {
                path: "products",
                element: <ProductManagementPage />,
            },
            {
                path: "orders",
                element: <OrderManagementPage />,
            },
            {
                path: "settings",
                element: <SettingsPage />,
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
