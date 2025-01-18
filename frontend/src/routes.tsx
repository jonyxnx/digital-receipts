import Login from "./pages/Login";
import Home from "./pages/Home";

const routes = [
  { path: "/", element: <Home />, name: "Home" }, 
  { path: "/login", element: <Login />, name: "Login" },
];

export default routes;
