import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            sessionStorage.setItem('isAdmin', 'true');
            onLogin(true);
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <form id="login-form" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">Admin Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                <p id="error-message" className="text-red-500 text-xs italic">{errorMessage}</p>
            </form>
        </div>
    );
};

export default Login;
