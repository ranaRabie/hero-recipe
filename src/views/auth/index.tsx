import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { signup, login } from "../../hooks/auth";
import { authActions } from "../../store/auth";
import authImage from "../../assets/auth.avif";
import styles from "./auth.module.scss";

const AuthPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(
    (state: { auth: { isLogin: Boolean } }) => state.auth.isLogin
  );

  const authSubmitHandler = async (
    name: string,
    email: string,
    password: string
  ) => {
    if (isLogin) {
      await login(email, password);
      dispatch(
        authActions.login(JSON.parse(localStorage.getItem("user") || "{}"))
      );
      navigate("/");
    } else {
      await signup(name, email, password);
      dispatch(
        authActions.signup(JSON.parse(localStorage.getItem("user") || "{}"))
      );
      dispatch(authActions.toggleMode());
      navigate("/");
    }
  };

  return (
    <>
      <div className={styles["auth-page"]}>
        <div>
          <img src={authImage} />
        </div>
        <AuthForm authSubmitHandler={authSubmitHandler} />
      </div>
    </>
  );
};

export default AuthPage;
