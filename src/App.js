import React from "react";
import { Switch } from "react-router";
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
      </Switch>
    </Router>
  );
}

export default App;
