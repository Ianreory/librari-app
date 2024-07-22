import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const token = Cookies.get("token");

  const authProtected = ["/login", "/register"];
  const protectedByToken = ["/profile", "/profile/edit", "history-borrow", "/dashboard", "/borrow"];
  // const adminProtected = ["/dashboard"];
  // const userProtected = ["/history-borrow/borrow"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;

    // TODO: Add protected by role (admin & user)
  }

  return <Outlet />;
};

export default ProtectedRoute;
