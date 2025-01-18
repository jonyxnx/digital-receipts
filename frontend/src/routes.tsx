import Login from "./pages/Login";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";

const routes = [
  { path: "/", element: <Home />, name: "Home" }, 
  { path: "/login", element: <Login />, name: "Login" },
  { path: "/reset-password", element: <ResetPassword />, name: "ResetPassword" },
];

export default routes;
