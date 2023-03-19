import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { useCheckForUserToken } from "../../hooks/auth";

const Nav: React.FC = () => {
  const isUserLoggedIn = useCheckForUserToken();
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isUserLoggedIn && (
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
