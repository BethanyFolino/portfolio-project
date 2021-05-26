import React from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> Kenzie Flicks
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
