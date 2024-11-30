import React from 'react';

const ProductCard = () => {
    return (
        <div className="max-w-xs border rounded-lg shadow-md overflow-hidden">
            {/* Discount and Installment Badges */}
            <div className="relative">
                <img
                    src="https://onewaymobile.vn/images/products/2024/09/10/large/6_1725946350.webp"
                    alt="Apple iPhone 16 Plus"
                    className="w-full h-56 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                    Giảm 7%
                </div>
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-sm rounded">
                    Trả góp 0%
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900">
                    Điện thoại Apple iPhone 16 Plus 128GB VN/A
                </h2>
                <div className="flex items-center space-x-2 my-2">
                    <span className="bg-gray-200 px-2 py-1 text-sm rounded">128GB</span>
                    <span className="bg-gray-200 px-2 py-1 text-sm rounded">256GB</span>
                    <span className="bg-gray-200 px-2 py-1 text-sm rounded">512GB</span>
                </div>
                <div className="text-gray-600 text-sm mb-2">6.7"</div>
                <div className="text-red-600 font-bold text-xl mb-2">
                    24.290.000đ
                    <span className="text-gray-500 line-through text-sm ml-2">
                        25.990.000đ
                    </span>
                </div>
                <div className="text-gray-500 text-sm">Mới 100%</div>
                <div className="flex items-center mt-2">
                    {/* Stars */}
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
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
        </div>
    );
};

export default ProductCard;