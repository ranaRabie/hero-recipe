import { RouteObject } from "react-router";
import Recipes from "../views/recipes";
import Details from "../views/recipes/Details";

const routes: RouteObject[] = [
  {
    path: "/",
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
];

export default routes;
