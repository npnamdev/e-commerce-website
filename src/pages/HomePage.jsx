import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    return (
        <main className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-32 text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Chào mừng đến với ShopX
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Mua sắm thỏa thích với những ưu đãi hấp dẫn.
                    </p>
                    <Link
                        to="/products"
                        className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
                    >
                        Khám Phá Sản Phẩm
                    </Link>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Danh Mục Sản Phẩm</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link
                            to="/category/phones"
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-2">Điện Thoại</h3>
                            <p className="text-gray-600">
                                Những chiếc điện thoại mới nhất, cao cấp nhất.
                            </p>
                        </Link>
                        <Link
                            to="/category/laptops"
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-2">Laptop</h3>
                            <p className="text-gray-600">
                                Máy tính xách tay đa dạng, phù hợp với mọi nhu cầu.
                            </p>
                        </Link>
                        <Link
                            to="/category/clothing"
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-2">Quần Áo</h3>
                            <p className="text-gray-600">
                                Thời trang mới nhất với chất lượng tuyệt vời.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Sản Phẩm Nổi Bật</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-10 bg-blue-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Tại Sao Chọn ShopX?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-2">Miễn Phí Vận Chuyển</h3>
                            <p className="text-gray-600">
                                Giao hàng miễn phí cho tất cả các đơn hàng trên 500k.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-2">Đảm Bảo Chất Lượng</h3>
                            <p className="text-gray-600">
                                Tất cả sản phẩm đều được kiểm tra chất lượng kỹ càng.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-2">Đổi Trả Dễ Dàng</h3>
                            <p className="text-gray-600">
                                Chính sách đổi trả sản phẩm dễ dàng trong 30 ngày.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Khách Hàng Nói Gì?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <p className="text-gray-600 italic">
                                "Dịch vụ tuyệt vời và sản phẩm chất lượng. Tôi rất hài lòng!"
                            </p>
                            <p className="mt-4 text-blue-600 font-bold">- Nguyễn Hoàng</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <p className="text-gray-600 italic">
                                "Mua sắm tại ShopX thật dễ dàng và tiện lợi. Sẽ mua thêm!"
                            </p>
                            <p className="mt-4 text-blue-600 font-bold">- Mai Lan</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <p className="text-gray-600 italic">
                                "Tôi đã mua một chiếc điện thoại, rất hài lòng với sản phẩm!"
                            </p>
                            <p className="mt-4 text-blue-600 font-bold">- Lê Minh</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gray-200 py-32">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Mua Ngay Hôm Nay!</h2>
                    <p className="text-lg mb-6">
                        Hãy tận dụng các ưu đãi khủng của chúng tôi. Đừng bỏ lỡ!
                    </p>
                    <Link
                        to="/signup"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
                    >
                        Đăng Ký Ngay
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
