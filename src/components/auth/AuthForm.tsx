import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import styles from "./AuthForm.module.scss";
import { authActions } from "../../store/auth";

const AuthForm: React.FC<{ authSubmitHandler: any }> = ({
  authSubmitHandler,
}) => {
  const usernameInput = useRef<HTMLInputElement | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const isLogin = useSelector(
    (state: { auth: { isLogin: Boolean } }) => state.auth.isLogin
  );

  const authFormSubmitHandler = (e: any) => {
    e.preventDefault();
    if (emailInput.current && passwordInput.current) {
      authSubmitHandler(
        usernameInput?.current?.value,
        emailInput.current.value,
        passwordInput.current.value
      );
    }
  };

  function switchAuthHandler() {
    dispatch(authActions.toggleMode());
  }

  return (
    <div>
      <div className="page-header">
        <h2 className="text-center fw-bold mb-4">
          {isLogin ? "Log in" : "Create a new user"}
        </h2>
      </div>
      <form onSubmit={authFormSubmitHandler} className={styles.form}>
        {!isLogin && (
          <div className="mb-4">
            <label htmlFor="email" className="mb-1">
              User Name
            </label>
            <input
              id="name"
              type="text"
              name="email"
              className="form-control"
              ref={usernameInput}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            ref={emailInput}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="image" className="mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            ref={passwordInput}
            required
          />
        </div>
        <div className="mt-4">
          <button className="btn btn-primary btn-lg">
            {isLogin ? "Login" : "Signup"}
          </button>
          <button
            onClick={switchAuthHandler}
            type="button"
            className="btn btn-link"
          >
            {isLogin ? "Create new user" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
