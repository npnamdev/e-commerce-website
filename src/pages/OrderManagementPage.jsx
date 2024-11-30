import React from "react";
import { orders } from "../data/mockData";  // Assuming you have mock data for orders

const OrderManagementPage = () => {
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">Quản Lý Đơn Hàng</h1>

            <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left">ID Đơn Hàng</th>
                        <th className="px-4 py-2 text-left">Tên Người Dùng</th>
                        <th className="px-4 py-2 text-left">Sản Phẩm</th>
                        <th className="px-4 py-2 text-left">Số Lượng</th>
                        <th className="px-4 py-2 text-left">Tổng Giá</th>
                        <th className="px-4 py-2 text-left">Trạng Thái</th>
                        <th className="px-4 py-2 text-left">Hành Động</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-t">
                            <td className="px-4 py-2">{order.id}</td>
                            <td className="px-4 py-2">{order.userName}</td>
                            <td className="px-4 py-2">{order.productName}</td>
                            <td className="px-4 py-2">{order.quantity}</td>
                            <td className="px-4 py-2">
                                {order.totalPrice.toLocaleString()} VND
                            </td>
                            <td className="px-4 py-2">
                                {order.status === "Delivered" ? (
                                    <span className="text-green-500">Đã Giao</span>
                                ) : (
                                    <span className="text-yellow-500">Chờ Xử Lý</span>
                                )}
                            </td>
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

export default OrderManagementPage;
