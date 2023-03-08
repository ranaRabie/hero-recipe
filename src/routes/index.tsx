import { RouteObject } from "react-router";
import Recipes from "../views/recipes";
import Details from "../views/recipes/Details";
import AuthPage from "../views/auth";
import RootLayout from "../views/RootLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Recipes />,
      },
      {
        path: "recipe-details/:id",
        element: <Details />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
];

export default routes;
