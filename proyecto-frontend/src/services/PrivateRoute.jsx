import React from "react";
import { useAuth } from "./AuthContext";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { token } = useAuth();
    return (
      <Route
        {...rest}
        render={(props) =>
          token ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

export default PrivateRoute;