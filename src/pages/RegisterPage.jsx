import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            setError('Vui lòng nhập đầy đủ thông tin!');
        } else if (password !== confirmPassword) {
            setError('Mật khẩu không khớp!');
        } else {
            // Logic đăng ký ở đây
            console.log('Đăng ký với', email, password);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Đăng ký</h2>

                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                            placeholder="Nhập email của bạn"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                            placeholder="Nhập mật khẩu của bạn"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-600">Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                            placeholder="Xác nhận mật khẩu của bạn"
                        />
                    </div>

                    <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Đăng ký
                    </button>

                    <div className="mt-4 text-center">
                        <span className="text-sm text-gray-600">Đã có tài khoản? </span>
                        <Link to="/login" className="text-blue-500 hover:underline">Đăng nhập ngay</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
