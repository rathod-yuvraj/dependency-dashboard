import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  role: string;
}

export default function ProtectedRoute({ children, role }: Props) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) return <Navigate to="/" />;
  if (userRole !== role) return <Navigate to="/" />;

  return children;
}
