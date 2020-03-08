import React from "react";
import * as classes from "./Login.module.css";
const Login = () => {
  const onLoginClick = e => {
    e.preventDefault();
    // alert('login clicked!')
    fetch("",)
  };

  const onSignupClick = e => {
    e.preventDefault();
  };
  return (
    <div className={classes.container}>
      <form className={classes.login}>
        <label for="username">Username</label>
        <input name="username" />
        <label for="password">Passwrord</label>
        <input name="password" />
        <div className={classes.actions}>
          <button onClick={onLoginClick}>Login</button>
          <button onClick={onSignupClick}>Signup</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
