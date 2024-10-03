import React, { useState } from 'react';

function Login() {
    // Khởi tạo state cho username và password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // In giá trị username và password từ state ra console
        console.log('Đăng nhập thành công với:', { username, password });
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Cập nhật state username
                />
                
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Cập nhật state password
                />

                <button type="submit">Đăng nhập</button>
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">is admin</label>
            </form>
        </div>
    );
}

export default Login;
