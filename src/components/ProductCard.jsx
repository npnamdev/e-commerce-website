import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        // Dùng thẻ Link để chuyển hướng tới trang chi tiết sản phẩm
        <Link to={`/products/${product.id}`} className="max-w-xs border rounded-lg shadow-md overflow-hidden">
            {/* Giảm giá và Trả góp */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                    Giảm {product.discount}%
                </div>
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-sm rounded">
                    Trả góp {product.installments}%
                </div>
            </div>

            {/* Thông tin sản phẩm */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
                <div className="flex items-center space-x-2 my-2">
                    {product.sizes.map((size, index) => (
                        <span key={index} className="bg-gray-200 px-2 py-1 text-sm rounded">
                            {size}
                        </span>
                    ))}
                </div>
                <div className="text-gray-600 text-sm mb-2">{product.screen}</div>
                <div className="text-red-600 font-bold text-xl mb-2">
                    {product.price.toLocaleString()}đ
                    <span className="text-gray-500 line-through text-sm ml-2">
                        {product.oldPrice.toLocaleString()}đ
                    </span>
                </div>
                <div className="text-gray-500 text-sm">Mới 100%</div>
                <div className="flex items-center mt-2">
                    {/* Đánh giá sao */}
                    <div className="flex">
                        {[...Array(product.rating)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-yellow-500"
                            >
                                <path d="M12 .587l3.668 7.435 8.2 1.196-5.934 5.78 1.4 8.168-7.334-3.857-7.334 3.857 1.4-8.168-5.934-5.78 8.2-1.196z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
