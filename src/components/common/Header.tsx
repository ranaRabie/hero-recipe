import logo from "../../assets/logo-icon.png";
import slogan from "../../assets/logo-slogan.png";
import HeaderStyles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useCheckForUserToken, getUserData } from "../../hooks/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import Nav from "./Nav";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLoggedIn = useCheckForUserToken();
  const userData = getUserData();

  const logUserOut = () => {
    localStorage.removeItem("user");
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <header className={HeaderStyles["main-header"]}>
      <div className="container">
        <div className={HeaderStyles["main-header__inner"]}>
          <div className={HeaderStyles["main-header__logo"]}>
            <img src={logo} />
            <img src={slogan} />
          </div>
          <div className={HeaderStyles["main-header__nav"]}>
            <Nav />
          </div>
          <div className={HeaderStyles["main-header__actions"]}>
            {isUserLoggedIn && (
              <div>
                <p>welcome {userData?.displayName}</p>
                <button onClick={logUserOut} className="btn btn-primary">
                  logout
                </button>
              </div>
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
