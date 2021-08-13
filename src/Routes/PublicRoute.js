import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const PublicRoute = ({
  component: Component,
  restricted = false,
  ...rest
}) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser && restricted ? (
          <Redirect to="/profile" />
        ) : (
          <Component {...props} />
        );
      }}
    ></Route>
  );
};

export default PublicRoute;
