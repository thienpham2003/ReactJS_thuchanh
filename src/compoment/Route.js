import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App'; // Đường dẫn tới component App
import Login from './Login'; // Đường dẫn tới component Login
import Hello from './hello'; // Đường dẫn tới component Hello
import Car from './Car'; // Đường dẫn tới component Car

function RouteConfig() {
    return (
        <Router>
            <Routes>
                {/* Route 1: Path / */}
                <Route path="/" element={<App />} />
                
                {/* Route 2: Path /login */}
                <Route path="/login" element={<Login />} />
                
                {/* Route 3: Path /hello */}
                <Route path="/hello" element={<Hello />} />
                
                {/* Route 4: Path /car */}
                <Route path="/car" element={<Car />} />
                
                {/* Route 5: Path * (Không tìm thấy trang web) */}
                <Route path="*" element={<div>Không tìm thấy trang web theo yêu cầu</div>} />
            </Routes>
        </Router>
    );
}

export default RouteConfig;
