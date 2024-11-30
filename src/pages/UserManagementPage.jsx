import React from "react";
import { users } from "../data/mockData";  // Assuming you have a users mock data similar to products

const UserManagementPage = () => {
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center mb-6">Quản Lý Người Dùng</h1>

            <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Tên Người Dùng</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Số Điện Thoại</th>
                        <th className="px-4 py-2 text-left">Vai Trò</th>
                        <th className="px-4 py-2 text-left">Trạng Thái</th>
                        <th className="px-4 py-2 text-left">Hành Động</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-t">
                            <td className="px-4 py-2">{user.id}</td>
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{user.phone}</td>
                            <td className="px-4 py-2">{user.role}</td>
                            <td className="px-4 py-2">
                                {user.isActive ? (
                                    <span className="text-green-500">Hoạt Động</span>
                                ) : (
                                    <span className="text-red-500">Không Hoạt Động</span>
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

export default UserManagementPage;
