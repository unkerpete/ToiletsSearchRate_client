import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

      if (data.message === 'user or email already exists') {
        // some code (modal?) to notify user
      } else {
        // some code (modal?) to notify successful create
        // store newly created username in a state that can be accessed by the Navbar comp so that Navbar can "Welcome <newusername>"
        // then bring user back to homepage
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

  return (
    <div className="max-w-sm mx-auto mt-36">
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
