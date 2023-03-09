import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = ({ handleNavbarUserName }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const registerUser = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5001/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: `${username}`,
          email: `${email}`,
          _password: `${password}`,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (data.message === 'Username or email already exists') {
        // some code (modal?) to notify user
        showToastMessage('error', data.message);
      } else {
        // store newly created username in a state that can be accessed by the Navbar comp so that Navbar can "Welcome <newusername>"
        handleNavbarUserName(data.userName);

        // some code (modal?) to notify successful create
        showToastMessage(
          'success',
          'You are now registered! Please try logging in.'
        );
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
    setUsername('');
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
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="username">
            Username:
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
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
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
