import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import styles from "./AuthForm.module.scss";
import { authActions } from "../../store/auth";

const AuthForm: React.FC<{ authSubmitHandler: any }> = ({
  authSubmitHandler,
}) => {
  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const isLogin = useSelector(
    (state: { auth: { isLogin: Boolean } }) => state.auth.isLogin
  );

  const authFormSubmitHandler = (e: any) => {
    e.preventDefault();
    if (emailInput.current && passwordInput.current) {
      authSubmitHandler(emailInput.current.value, passwordInput.current.value);
    }
  };

  function switchAuthHandler() {
    dispatch(authActions.toggleMode());
  }

  return (
    <>
      <div className="page-header">
        <h2 className="text-center fw-bold mb-4">
          {isLogin ? "Log in" : "Create a new user"}
        </h2>
      </div>
      <form onSubmit={authFormSubmitHandler} className={styles.form}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            ref={emailInput}
            required
          />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            ref={passwordInput}
            required
          />
        </p>
        <div>
          <button
            onClick={switchAuthHandler}
            type="button"
            className="btn btn-link"
          >
            {isLogin ? "Create new user" : "Login"}
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
