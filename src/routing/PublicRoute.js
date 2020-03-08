import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={props => {
        console.log(props);
        return restricted ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};
