import axios from "axios";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../pages/Loading/Loading";
import { config_access_token } from "../access_token";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  // && !localStorage.getItem("role") === "admin"
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
