import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-200 grid grid-cols-[2fr_10fr]">
            <div className="bg-gray-800 text-white min-h-screen p-5">
                <h2 className="text-xl font-bold mb-6">Logo</h2>
                <ul>
                    <li className="mb-4">
                        <Link to="/admin" className="hover:text-gray-400">Bảng điều khiển</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/users" className="hover:text-gray-400">Quản lý người dùng</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/products" className="hover:text-gray-400">Quản lý sản phẩm</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/orders" className="hover:text-gray-400">Quản lý đơn hàng</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/settings" className="hover:text-gray-400">Cài đặt</Link>
                    </li>
                </ul>

                <button
                    onClick={handleLogout}
                    className="mt-6 w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    Đăng xuất
                </button>
            </div>
            <main className="py-6 px-8 h-dvh overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
