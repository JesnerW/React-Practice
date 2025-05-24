import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  
  if (!logged) {
    return <Navigate to="/login" />;
  } else {
    localStorage.setItem("lastPath", lastPath);
    return children
  }
};
