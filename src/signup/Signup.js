import React from "react";
import * as classes from "./Signup.module.css";
const Signup = () => {
  return (
    <div className={classes.container}>
      <form className={classes.login}>
        <label for="username">Username</label>
        <input name="username" />
        <label for="password">Passwrord</label>
        <input name="password" />
        <div className={classes.actions}>
          <button>Signup</button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
