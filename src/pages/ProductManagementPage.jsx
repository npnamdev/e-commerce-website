import React from "react";
import { products } from "../data/mockData";

const ProductManagementPage = () => {
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">Quản Lý Sản Phẩm</h1>

            <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Tên Sản Phẩm</th>
                        <th className="px-4 py-2 text-left">Mô Tả</th>
                        <th className="px-4 py-2 text-left">Giá</th>
                        <th className="px-4 py-2 text-left">Khuyến Mãi</th>
                        <th className="px-4 py-2 text-left">Đánh Giá</th>
                        <th className="px-4 py-2 text-left">Hành Động</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-t">
                            <td className="px-4 py-2">{product.id}</td>
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.screen}</td>
                            <td className="px-4 py-2">
                                {product.price.toLocaleString()} VND
                            </td>
                            <td className="px-4 py-2">{product.discount}%</td>
                            <td className="px-4 py-2">{product.rating}★</td>
                            <td className="px-4 py-2">
                                <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
                                    Sửa
                                </button>
                                <button className="bg-red-500 text-white py-1 px-3 rounded-lg ml-2 hover:bg-red-600">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductManagementPage;
