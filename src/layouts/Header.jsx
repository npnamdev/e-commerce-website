import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-300">
                        MyLogo
                    </Link>
                </div>

                {/* Navigation for Desktop */}
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-gray-300">
                        Trang Chủ
                    </Link>
                    <Link to="/products" className="hover:text-gray-300">
                        Sản Phẩm
                    </Link>
                    <Link to="/admin" className="hover:text-gray-300">
                        Quản Trị
                    </Link>
                </nav>

                {/* Action Buttons: Login & Register */}
                <div className="flex space-x-4">
                    <Link
                        to="/login"
                        className="text-white bg-transparent border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-600 transition-colors"
                    >
                        Đăng Nhập
                    </Link>
                    <Link
                        to="/signup"
                        className="text-white bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-md transition-colors"
                    >
                        Đăng Ký
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
