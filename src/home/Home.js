import React from "react";
import { Link } from "react-router-dom";
import * as classes from "./Home.module.css";
const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <h2>Logo</h2>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
