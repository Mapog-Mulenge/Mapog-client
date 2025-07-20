import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireSuperAdmin = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "super_admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default RequireSuperAdmin;
