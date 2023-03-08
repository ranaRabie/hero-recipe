import logo from "../../assets/logo-icon.png";
import slogan from "../../assets/logo-slogan.png";
import HeaderStyles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useCheckForUserToken, logout } from "../../hooks/auth";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: { auth: { user: {} } }) => state.auth.user);
  const isUserLoggedIn = useCheckForUserToken(user);

  const logUserOut = () => {
    logout();
    dispatch(authActions.logout());
  };

  return (
    <header className={HeaderStyles["main-header"]}>
      <div className="container">
        <div className={HeaderStyles["main-header__inner"]}>
          <div className={HeaderStyles["main-header__logo"]}>
            <img src={logo} />
            <img src={slogan} />
          </div>
          <div className={HeaderStyles["main-header__actions"]}>
            {isUserLoggedIn && (
              <button onClick={logUserOut} className="btn btn-primary">
                logout
              </button>
            )}
            {!isUserLoggedIn && (
              <Link to="/auth" className="btn btn-primary mx-2 text-capitalize">
                login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
