import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
function App() {
  const router = createBrowserRouter(routes);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (user && user.idToken) {
      dispatch(authActions.login(user));
    } else {
      dispatch(authActions.logout());
    }
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
