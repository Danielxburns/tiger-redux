import React from 'react';

import { Outlet, Link } from 'react-router-dom';
import logo from '../common/assets/images/logo512.png';
import '../App.css';

const NavBar = () => {;

  return (
    <div className="App">
      <div className="nav-container">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <Link to="/">Home</Link> <Link to="/signIn">Sign-In</Link>{' '}
        <Link to="/user">User</Link>{' '}
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
