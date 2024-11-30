import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories, testimonials } from "../data/mockData"; // Import mock data

const HomePage = () => {
    // Get the first 4 products
    const featuredProducts = products.slice(0, 4);

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
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/category/${category.name.toLowerCase()}`}
                                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg"
                            >
                                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                                <p className="text-gray-600">{category.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Sản Phẩm Nổi Bật</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
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
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white shadow-md rounded-lg p-6">
                                <p className="text-gray-600 italic">{testimonial.text}</p>
                                <p className="mt-4 text-blue-600 font-bold">- {testimonial.name}</p>
                            </div>
                        ))}
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
