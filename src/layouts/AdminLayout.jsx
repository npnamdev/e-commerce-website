import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-200">
            <header className="bg-red-600 text-white p-4">Admin Header</header>
            <main className="p-6">
                <Outlet />
            </main>
            <footer className="bg-gray-900 text-white text-center py-4">
                Admin Footer
            </footer>
        </div>
    );
};

export default AdminLayout;
