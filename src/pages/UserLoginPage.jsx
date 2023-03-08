import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLoginPage = ({
  handleNavbarUserName,
  handleUserRole,
  handleLoginStatus,
}) => {
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
        },
        body: JSON.stringify({
          email: `${email}`,
          _password: `${password}`,
        }),
      });

      const data = await res.json();
      const token = data.token;
      // const role = data.role;
      const username = data.username;

      if (data.message === 'Logged in successfully') {
        // Store the token and role in localStorage. TODO: change to saving token in???
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);

        // lift logged in status to app.jsx
        handleLoginStatus(true);

        // store newly created username in a state that can be accessed by the Navbar comp so that Navbar can "Welcome <newusername>"
        handleNavbarUserName(data.username);

        // store role of logged in user in app.jsx state
        handleUserRole(data.role);

        // some code (modal?) to notify user. Decided to use toast library
        showToastMessage(
          'success',
          'You are now logged in! Sending you back to home.'
        );

        // after closing notification, send user back to home page.
        // TOSOLVE: a just logged in admin goes to admin page immediately after logging in. But because of the below timeOut code, 5.5 seconds later, the admin will be redirected to the home page. Figure a way to clearTimeOut() the below timeOut code when user navigates away.
        setTimeout(() => {
          navigate('/home');
        }, 2000);
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
            type="email"
            id="username"
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
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginPage;
