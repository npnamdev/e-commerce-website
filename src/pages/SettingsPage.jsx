import React, { useState } from "react";

const SettingsPage = () => {
    const [userInfo, setUserInfo] = useState({
        username: "admin123",
        email: "admin@example.com",
    });

    const [security, setSecurity] = useState({
        twoFactor: false,
    });

    const [systemSettings, setSystemSettings] = useState({
        theme: "light",
        language: "vi",
        timezone: "UTC",
    });

    // Handle changes in settings
    const handleUserInfoChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSecurityChange = (e) => {
        setSecurity({
            ...security,
            [e.target.name]: e.target.checked,
        });
    };

    const handleSystemSettingsChange = (e) => {
        setSystemSettings({
            ...systemSettings,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Cài Đặt</h1>

            {/* User Info Section */}
            <div className="bg-white p-6 shadow-md rounded-lg mb-6">
                <h2 className="text-2xl font-semibold mb-4">Thông Tin Tài Khoản</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Tên Người Dùng</label>
                        <input
                            type="text"
                            name="username"
                            value={userInfo.username}
                            onChange={handleUserInfoChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleUserInfoChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                            Lưu Thay Đổi
                        </button>
                    </div>
                </form>
            </div>

            {/* Security Settings Section */}
            <div className="bg-white p-6 shadow-md rounded-lg mb-6">
                <h2 className="text-2xl font-semibold mb-4">Bảo Mật</h2>
                <form>
                    <div className="mb-4">
                        <label className="flex items-center text-sm font-medium text-gray-600">
                            <input
                                type="checkbox"
                                name="twoFactor"
                                checked={security.twoFactor}
                                onChange={handleSecurityChange}
                                className="mr-2"
                            />
                            Xác thực hai yếu tố (2FA)
                        </label>
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                            Lưu Thay Đổi
                        </button>
                    </div>
                </form>
            </div>

            {/* System Settings Section */}
            <div className="bg-white p-6 shadow-md rounded-lg mb-6">
                <h2 className="text-2xl font-semibold mb-4">Cài Đặt Hệ Thống</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Giao Diện</label>
                        <select
                            name="theme"
                            value={systemSettings.theme}
                            onChange={handleSystemSettingsChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        >
                            <option value="light">Sáng</option>
                            <option value="dark">Tối</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Ngôn Ngữ</label>
                        <select
                            name="language"
                            value={systemSettings.language}
                            onChange={handleSystemSettingsChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        >
                            <option value="vi">Tiếng Việt</option>
                            <option value="en">Tiếng Anh</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Múi Giờ</label>
                        <select
                            name="timezone"
                            value={systemSettings.timezone}
                            onChange={handleSystemSettingsChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        >
                            <option value="UTC">UTC</option>
                            <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh</option>
                            <option value="America/New_York">America/New_York</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                            Lưu Thay Đổi
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingsPage;
