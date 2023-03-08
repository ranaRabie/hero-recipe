import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { signup, login } from "../../hooks/auth";
import { authActions } from "../../store/auth";

const AuthPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(
    (state: { auth: { isLogin: Boolean } }) => state.auth.isLogin
  );

  const authSubmitHandler = async (email: string, password: string) => {
    if (isLogin) {
      await login(email, password);
      dispatch(
        authActions.login(JSON.parse(localStorage.getItem("user") || "{}"))
      );
      navigate("/");
    } else {
      await signup(email, password);
      dispatch(
        authActions.signup(JSON.parse(localStorage.getItem("user") || "{}"))
      );
      navigate("/");
    }
  };

  return (
    <>
      <h1>auth</h1>
      <AuthForm authSubmitHandler={authSubmitHandler} />
    </>
  );
};

export default AuthPage;
