import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Component/Login/Login.jsx';
import Dashboard from '../Component/Dashboard/Dashboard.jsx';
import Profile from '../Component/Profile/Profile.jsx';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
);

export default AppRouter;
