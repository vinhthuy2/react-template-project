import React from "react";
import { Switch, Redirect } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/Login";
import "./App.css";
import Home from "./home/Home";
import Signup from "./signup/Signup";
import { PublicRoute } from "./routing/PublicRoute";
import { PrivateRoute } from "./routing/PrivateRoute";
import { About } from "./about/about/About";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" restricted={false} component={Login} />
        <PrivateRoute path="/about" component={About}></PrivateRoute>
        <Route path="/signup" component={Signup} />
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Redirect path="/" exact to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
