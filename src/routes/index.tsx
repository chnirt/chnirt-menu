import { createBrowserRouter } from "react-router-dom";
import { Loadable, PrivateRoute, PublicRoute } from "./utils";

export const routes = {
  styleGuide: "/",
  login: "/login",
  register: "/register",
  app: "/app",
};

export const router = createBrowserRouter([
  {
    element: <Loadable {...{ factory: () => import("@/pages/Home") }} />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: routes.app,
            element: <Loadable {...{ factory: () => import("@/pages/App") }} />,
          },
        ],
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: routes.login,
            element: (
              <Loadable {...{ factory: () => import("@/pages/Login") }} />
            ),
          },
          {
            path: routes.register,
            element: (
              <Loadable {...{ factory: () => import("@/pages/Register") }} />
            ),
          },
        ],
      },
      {
        path: routes.styleGuide,
        element: (
          <Loadable {...{ factory: () => import("@/pages/StyleGuide") }} />
        ),
      },
    ],
  },
]);
