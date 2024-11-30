import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/error-page.jsx";
import HomeLayout from "../layouts/HomeLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import HomePage from "../pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <div>About Page Content</div>,
            },
        ],
    },
    {
        path: "admin",
        element: <AdminLayout />,
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
]);

export default router;
