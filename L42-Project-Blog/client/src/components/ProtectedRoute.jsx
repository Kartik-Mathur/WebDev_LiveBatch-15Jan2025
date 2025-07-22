import { useFetchUserQuery } from "../services/api";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ redirectTo = "/login" }) {
  const { data: user } = useFetchUserQuery();
  return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
}
