import Home from "../pages/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/user",
    component: User,
    exact: true,
  },
  {
    component: Error404,
  },
];

export default routes;
