import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const useCheckForUserToken = () => {
  const isAuth = useSelector(
    (state: { auth: { isAuth: Boolean } }) => state.auth.isAuth
  );
  const userStore = useSelector(
    (state: { auth: { user: {} } }) => state.auth.user
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (user && user.idToken) {
      setIsUserLoggedIn((setIsUserLoggedIn) => (setIsUserLoggedIn = true));
    } else {
      setIsUserLoggedIn(false);
    }
  }, [isAuth, userStore]);

  return isUserLoggedIn;
};

export const getUserData = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user && user.idToken) {
    return user;
  }
  return null;
};

export const signup = async (n: string, e: string, p: string) => {
  const res = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqfNpn7RO5qaghsKx6Bt9UExlGGHpPZXI",
    {
      email: e,
      password: p,
      displayName: n,
      returnSecureToken: true,
    }
  );

  if (res.status !== 200) {
    alert("error");
    throw new Error("Parameter is not a number!");
  }

  localStorage.user = JSON.stringify(res.data);
};

export const login = async (e: string, p: string) => {
  const res = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqfNpn7RO5qaghsKx6Bt9UExlGGHpPZXI",
    {
      email: e,
      password: p,
      returnSecureToken: true,
    }
  );

  if (res.status !== 200) {
    alert("error");
    throw new Error("Parameter is not a number!");
  }

  localStorage.user = JSON.stringify(res.data);
};
