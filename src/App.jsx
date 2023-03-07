import { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserLoginPage from './pages/UserLoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [userLocation, setUserLocation] = useState();
  const [userName, setUserName] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavbarUserName = (userName) => {
    setUserName(userName);
  };

  const handleUserRole = (role) => {
    setUserRole(role);
  };

  const handleLoginStatus = (boolean) => {
    setIsLoggedIn(boolean);
  };

  return (
    <>
      <Navbar
        userName={userName}
        userRole={userRole}
        isLoggedIn={isLoggedIn}
        handleLoginStatus={handleLoginStatus}
      />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage userName={userName} />} />
        <Route
          path="/login"
          element={
            <UserLoginPage
              handleNavbarUserName={handleNavbarUserName}
              handleUserRole={handleUserRole}
              handleLoginStatus={handleLoginStatus}
            />
          }
        />
        <Route
          path="/register"
          element={<RegisterPage handleNavbarUserName={handleNavbarUserName} />}
        />
        <Route
          path="/wipeskidmarksoff"
          element={userRole === 'admin' ? <AdminPage /> : <HomePage />}
        />
      </Routes>
    </>
  );
}

export default App;
