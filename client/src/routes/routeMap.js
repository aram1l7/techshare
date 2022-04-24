import { lazy } from "react";
const Landing = lazy(() => import("components/layout/landing"));
const Login = lazy(() => import("pages/auth/login"));
const Register = lazy(() => import("pages/auth/register"));
const routes = [
  {
    path: "/",
    exact: true,
    element: <Landing />,
  },
  {
    path: "/login",
    exact: true,
    element: <Login />,
  },
  {
    path: "/register",
    exact: true,
    element: <Register />,
  },
];

export default routes;
