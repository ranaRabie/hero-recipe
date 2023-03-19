import { RouteObject } from "react-router";
import Recipes from "../views/recipes";
import Details from "../views/recipes/Details";
import AuthPage from "../views/auth";
import RootLayout from "../views/RootLayout";
import ProfileLayout from "../views/ProfileLayout";
import Profile from "../views/profile";
import EditProfile from "../views/profile/Edit";

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
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "edit",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
];

export default routes;
