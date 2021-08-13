import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { currentUser } = useAuth();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Auth App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/landing" activeClassName={classes.active}>
              Landing
            </NavLink>
          </li>
          <li>
            {!currentUser && (
              <NavLink to="/login" activeClassName={classes.active}>
                Login
              </NavLink>
            )}
          </li>
          <li>
            {currentUser && (
              <NavLink to="/profile" activeClassName={classes.active}>
                Profile
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
