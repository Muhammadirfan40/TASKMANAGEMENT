import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Component/Profile/Profile';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
