import { Fragment, useState } from "react";
import { useAuth } from "../context/auth-context";

import classes from "./Profile.module.css";

const Profile = () => {
  const { currentUser, logout } = useAuth();

  const [error, setError] = useState("");

  const logoutHandler = async () => {
    setError("");
    try {
      await logout();
    } catch {
      setError("Failed to log out!");
    }
  };
  return (
    <Fragment>
      <h1 className={classes.header}>Profile</h1>
      <div className={classes.card}>
        <h3>Name: {currentUser.displayName}</h3>
        <h3>Email: {currentUser.email}</h3>
        {error && <p>{error}</p>}
        <button onClick={logoutHandler}>Log out</button>
      </div>
    </Fragment>
  );
};

export default Profile;
