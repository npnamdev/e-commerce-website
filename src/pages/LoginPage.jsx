import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const fakeEmail = 'user@example.com'; // Fake email for testing
    const fakePassword = 'password123'; // Fake password for testing

    const [email, setEmail] = useState('user@example.com');
    const [password, setPassword] = useState('password123');
    const [error, setError] = useState('');

    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if the email and password match the fake credentials
        if (!email || !password) {
            setError('Vui lòng nhập đầy đủ thông tin!');
        } else if (email !== fakeEmail || password !== fakePassword) {
            setError('Email hoặc mật khẩu không đúng!');
        } else {
            // If credentials are correct, simulate login success
            console.log('Đăng nhập thành công với', email);
            
            // Store the authToken in localStorage (simulating token storage)
            const authToken = 'fakeAuthToken123'; // Replace with actual token logic if needed
            localStorage.setItem('authToken', authToken);

            setError(''); // Clear error if login is successful
            
            // Redirect to /admin page after successful login
            navigate('/admin');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập</h2>

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

                    <div className="mb-6">
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

                    <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Đăng nhập
                    </button>

                    <div className="mt-4 text-center">
                        <span className="text-sm text-gray-600">Chưa có tài khoản? </span>
                        <Link to="/register" className="text-blue-500 hover:underline">Đăng ký ngay</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
