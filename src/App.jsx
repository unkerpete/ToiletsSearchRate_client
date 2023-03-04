import { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserLoginPage from './pages/UserLoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [userLocation, setUserLocation] = useState();
  const [userName, setUserName] = useState('Guest');

  const handleNavbarUserName = (userName) => {
    setUserName(userName);
  };

  return (
    <>
      <Navbar userName={userName} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <UserLoginPage handleNavbarUserName={handleNavbarUserName} />
          }
        />
        <Route
          path="/register"
          element={<RegisterPage handleNavbarUserName={handleNavbarUserName} />}
        />
      </Routes>
    </>
  );
}

export default App;
