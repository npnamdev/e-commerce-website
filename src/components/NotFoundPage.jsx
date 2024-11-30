import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center bg-white p-10 rounded-lg shadow-lg">
                <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Trang Bạn Tìm Không Tồn Tại
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Có thể bạn đã nhập sai URL hoặc trang này đã bị xóa.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-700 transition duration-300"
                >
                    Quay Về Trang Chủ
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
