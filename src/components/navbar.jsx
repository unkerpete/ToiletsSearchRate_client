import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ userName, userRole, isLoggedIn, handleLoginStatus }) => {
  const logout = () => {
    handleLoginStatus(false);
    localStorage.clear();
  };

  return (
    <>
      <div className="flex justify-between">
        <span className="text-2xl font-bold">{`Welcome, ${
          userName ? userName : 'Guest'
        }`}</span>

        <div className="flex items-center">
          {userRole === 'admin' && (
            <Link
              to="/wipeskidmarksoff"
              className="mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Admin Manage
            </Link>
          )}
          <Link
            to="/home"
            className="mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Home
          </Link>
          {isLoggedIn ? (
            <Link
              to="/home"
              className="mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
              onClick={logout}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Login
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to="/register"
              className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
