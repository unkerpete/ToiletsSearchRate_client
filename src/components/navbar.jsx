import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ userName, userRole }) => {
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
          <Link
            to="/login"
            className="mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
