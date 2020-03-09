import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './Header.module.css';
const Header = () => {
  return (
    <div className={classes.container}>
      <nav>
        <div className={classes.logo}>
          <h2>Logo</h2>
        </div>
        <div className={classes.navigation}>
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
