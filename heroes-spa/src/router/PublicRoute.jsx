import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../auth";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const lastPath = localStorage.getItem("lastPath") || "/";
  

  if(logged && lastPath === '/')
    return <Navigate to="/marvel" />

  if(logged && lastPath !== '/')
    return <Navigate to={lastPath} />
  else
    return children
};
