import React, { useState } from "react";
import * as classes from "./Login.module.css";
import axios from "axios";

const Login = props => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onLoginClick = e => {
    e.preventDefault();
    // alert('login clicked!')
    console.log(username, password);

    axios
      .post(
        "http://localhost:3001/api/user/login",
        {
          email: username,
          password: password
        },
        { responseType: "application/json" }
      )
      .then(token => {
        localStorage.setItem("token", token.data);
        props.history.push(props.match.url);
        // console.log(props.match.url);
      })
      .catch(err => console.log(err));
  };

  const onSignupClick = e => {
    e.preventDefault();
  };
  return (
    <div className={classes.container}>
      <form className={classes.login}>
        <label>Username</label>
        <input
          name="username"
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
        <label>Passwrord</label>
        <input
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className={classes.actions}>
          <button onClick={onLoginClick}>Login</button>
          <button onClick={onSignupClick}>Signup</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
