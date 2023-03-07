import logo from "../../assets/logo-icon.png";
import slogan from "../../assets/logo-slogan.png";
import HeaderStyles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={HeaderStyles["main-header"]}>
      <div className="container">
        <div className={HeaderStyles["main-header__inner"]}>
          <div className={HeaderStyles["main-header__logo"]}>
            <img src={logo} />
            <img src={slogan} />
          </div>
          <div className={HeaderStyles["main-header__actions"]}>
            <button className="btn btn-primary mx-2 text-capitalize">
              login
            </button>
            <button className="btn btn-light  text-capitalize">sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
