import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products as mockProducts } from "../data/mockData"; // Import data from mockData.js

const ProductDetailPage = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null); // State to store product data
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Find the product based on the id from the URL
        const selectedProduct = mockProducts.find((product) => product.id === parseInt(id));

        // If product found, set it to the state
        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            // If not found, you can handle this case (e.g., show an error)
            setProduct(null);
        }
        setLoading(false);
    }, [id]); // Depend on the product id to refetch when it changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>; // Handle case where product is not found
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex">
                {/* Product Image */}
                <div className="w-1/2 pr-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-96 object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    <div className="my-4 text-gray-600 text-sm">{product.screen}</div>
                    <div className="text-red-600 font-bold text-xl mb-4">
                        {product.price.toLocaleString()}đ
                        <span className="text-gray-500 line-through text-sm ml-2">
                            {product.oldPrice.toLocaleString()}đ
                        </span>
                    </div>
                    <div className="text-red-500 font-semibold mb-4">
                        Giảm {product.discount}%
                    </div>
                    <div className="text-blue-500 mb-4">Trả góp {product.installments}%</div>
                    <div className="text-gray-500 text-sm mb-4">{product.description || 'Mô tả sản phẩm chi tiết sẽ được cập nhật.'}</div>

                    {/* Size Options */}
                    <div className="my-4">
                        <h3 className="text-lg font-semibold text-gray-800">Size</h3>
                        <div className="flex space-x-2">
                            {product.sizes.map((size, index) => (
                                <span key={index} className="bg-gray-200 px-2 py-1 text-sm rounded">
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center my-4">
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
                        <span className="ml-2 text-gray-600">({product.rating} Stars)</span>
                    </div>

                    {/* Stock Availability */}
                    <div className="text-gray-600">
                        {/* Replace with actual stock data if available */}
                        {product.stock ? `In Stock: ${product.stock} units` : 'Out of Stock'}
                    </div>
                </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetailPage;
