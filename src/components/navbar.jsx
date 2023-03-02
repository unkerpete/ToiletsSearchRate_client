import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/login" className="m-28">
          Login
        </Link>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
};

export default Navbar;
