import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">MyLogo</div>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-300">
                        Home
                    </Link>
                    <Link to="/products" className="hover:text-gray-300">
                        Product
                    </Link>
                    <Link to="/products/:id" className="hover:text-gray-300">
                        Detail
                    </Link>
                    <Link to="/admin" className="hover:text-gray-300">
                        Admin
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
