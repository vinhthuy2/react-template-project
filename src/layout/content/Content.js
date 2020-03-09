import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import * as classes from './Content.module.css';
import { About } from '../../components/about/About';
import Login from '../../components/login/Login';
import Signup from '../../components/signup/Signup';
import Home from '../../components/home/Home';
import { PublicRoute } from '../../routing/PublicRoute';
import { PrivateRoute } from '../../routing/PrivateRoute';
const Content = () => {
  return (
    <div className={classes.content}>
      <Switch>
        <PublicRoute path="/login" restricted={false} component={Login} />
        <PrivateRoute path="/about" component={About}></PrivateRoute>
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home}></Route>
        <Redirect path="/" exact to="/home" />
      </Switch>
    </div>
  );
};

export default Content;
