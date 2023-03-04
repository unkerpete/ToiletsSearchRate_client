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

  const handleNavbarUserName = (userName) => {
    setUserName(userName);
  };

  const handleUserRole = (role) => {
    setUserRole(role);
  };

  return (
    <>
      <Navbar userName={userName} userRole={userRole} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <UserLoginPage
              handleNavbarUserName={handleNavbarUserName}
              handleUserRole={handleUserRole}
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
