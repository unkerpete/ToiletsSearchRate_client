import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLoginPage = ({ handleNavbarUserName, handleUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: 'Bearer 9999999',
        },
        body: JSON.stringify({
          email: `${email}`,
          _password: `${password}`,
        }),
      });

      const data = await res.json();
      console.log(data);
      const token = data.token;

      if (data.message === 'Logged in successfully') {
        // Store the token in localStorage. TODO: change to saving token in???
        localStorage.setItem('token', token);

        // store newly created username in a state that can be accessed by the Navbar comp so that Navbar can "Welcome <newusername>"
        handleNavbarUserName(data.username);

        // store role of logged in user in app.jsx state
        handleUserRole(data.role);

        // some code (modal?) to notify user. Decided to use toast library
        showToastMessage(
          'success',
          'You are now logged in! Sending you back to home.'
        );

        // after closing notification, send user back to home page. necessary?
        setTimeout(() => {
          navigate('/home');
        }, 5500);
      } else {
        // some code (modal?) to notify user. Decided to use toast library
        showToastMessage('error', 'Invalid email or password');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
    setEmail('');
    setPassword('');
  };

  const showToastMessage = (type, message) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="max-w-sm mx-auto mt-36">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="username">
            Email:
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded"
            type="text"
            id="username"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginPage;
