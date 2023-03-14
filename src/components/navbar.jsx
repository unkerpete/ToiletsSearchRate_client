import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({
  userName,
  userRole,
  isLoggedIn,
  handleLoginStatus,
  setUserRole,
  setUserName,
}) => {
  const [toiletsCount, setToiletsCount] = useState();
  const logout = () => {
    handleLoginStatus(false);
    setUserName(null);
    setUserRole(null);
    localStorage.clear();
    showToastMessage('success', 'Logged out');
  };

  // handles success/errors of admin actions
  const showToastMessage = (type, message) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const getToilets = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5001/toilets/getalltoilets`);
      const json = await res.json();
      setToiletsCount(json.length);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getToilets();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-wrap sticky top-0 bg-white shadow-md rounded z-10 h-auto sm:p-5">
        <span className="flex items-center m-2 text-2xl font-bold text-gray-800">
          {`Welcome, ${
            userName ? userName : 'Guest'
          }. We have ${toiletsCount} toilets for you.`}
        </span>
        <div className="flex flex-wrap items-center sm:w-auto w-full sm:pl-0 pl-4 m-5">
          <Link
            to="/nearesttoilets"
            className="m-2 mr-4 px-3 py-1 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:from-green-500 hover:to-blue-600"
          >
            Toilets Map
          </Link>
          {userRole === 'admin' && (
            <Link
              to="/wipeskidmarksoff"
              className="m-2 mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Admin Manage
            </Link>
          )}
          <Link
            to="/home"
            className="m-2 mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            Home
          </Link>
          {isLoggedIn ? (
            <Link
              to="/home"
              className="m-2 mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
              onClick={logout}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="m-2 mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Login
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to="/register"
              className="m-2 mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
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
