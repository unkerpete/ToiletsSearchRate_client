import { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserLoginPage from './pages/UserLoginPage';
import HomePage from './pages/HomePage';

function App() {
  const [userLocation, setUserLocation] = useState();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<UserLoginPage />} />
      </Routes>
      <div className="m-28">mapasda?</div>
    </>
  );
}

export default App;
