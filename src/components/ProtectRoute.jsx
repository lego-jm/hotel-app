import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  console.log(user);

  if (!user || (!user.isAdmin && requireAdmin)) {
    return <Navigate to="/" replace></Navigate>;
  }

  return children;
}
