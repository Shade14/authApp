import { Fragment } from "react";
import classes from "./Login.module.css";
import SignUpWith from "../components/SignUpWith";

const Login = () => {
  return (
    <Fragment>
      <h1 className={classes.header}>Login</h1>
      <SignUpWith />
    </Fragment>
  );
};

export default Login;
