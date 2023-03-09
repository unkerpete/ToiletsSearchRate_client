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
      <div className="flex justify-between sticky top-0 bg-white h-16 shadow-md rounded">
        <span className="flex items-center ml-4 text-2xl font-bold text-gray-800">
          {`Welcome ${
            userName ? userName : 'Guest'
          }, check out these ${toiletsCount} toilets.`}
        </span>
        <div className="flex items-center mr-4">
          <Link
            to="/nearesttoilets"
            className="mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Toilets Map
          </Link>
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
              className="mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Register
            </Link>
          )}
        </div>
      </div>
      {/* <ToastContainer />
      <div className="flex justify-between sticky top-0 bg-white h-10">
        <span className="text-2xl font-bold">{`Welcome, ${
          userName ? userName : 'Guest'
        }`}</span>

        <div className="flex items-center">
          <Link
            to="/nearesttoilets"
            className="mr-4 px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Nearest Toilets
          </Link>
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
      </div> */}
    </>
  );
};

export default Navbar;
