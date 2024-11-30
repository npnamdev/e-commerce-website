import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products as mockProducts } from "../data/mockData"; // Rename import to avoid conflict

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Set products from mock data
        setProducts(mockProducts); 
    }, []);

    return (
        <main className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6">Danh Sách Sản Phẩm</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProductPage;
