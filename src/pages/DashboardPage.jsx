import React from "react";
import { Link } from "react-router-dom";
import { users, products, orders } from "../data/mockData"; // Importing mock data for users, products, and orders

const DashboardPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Bảng Điều Khiển</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* User Stats */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Người Dùng</h2>
                    <div className="text-4xl font-bold text-center text-blue-500">
                        {users.length}
                    </div>
                    <p className="text-center mt-2 text-gray-600">Tổng số người dùng</p>
                    <div className="text-center mt-4">
                        <Link
                            to="/user-management"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Quản Lý Người Dùng
                        </Link>
                    </div>
                </div>

                {/* Product Stats */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Sản Phẩm</h2>
                    <div className="text-4xl font-bold text-center text-green-500">
                        {products.length}
                    </div>
                    <p className="text-center mt-2 text-gray-600">Tổng số sản phẩm</p>
                    <div className="text-center mt-4">
                        <Link
                            to="/product-management"
                            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                        >
                            Quản Lý Sản Phẩm
                        </Link>
                    </div>
                </div>

                {/* Order Stats */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Đơn Hàng</h2>
                    <div className="text-4xl font-bold text-center text-orange-500">
                        {orders.length}
                    </div>
                    <p className="text-center mt-2 text-gray-600">Tổng số đơn hàng</p>
                    <div className="text-center mt-4">
                        <Link
                            to="/order-management"
                            className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                        >
                            Quản Lý Đơn Hàng
                        </Link>
                    </div>
                </div>
            </div>

            {/* Chart or Graph Section (Optional) */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Thống Kê</h2>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <p className="text-gray-600">You can add a chart here (e.g., orders over time).</p>
                    {/* Example chart or graph */}
                    <div className="w-full h-48 bg-gray-200 rounded-lg mt-4">
                        <p className="text-center text-gray-400 py-20">Chart Placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
