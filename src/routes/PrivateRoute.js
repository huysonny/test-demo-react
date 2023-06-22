import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log("checkk props : ", props);

  if (!isAuthenticated) {
    return <Navigate to="/login"></Navigate>;
  }
  return <>{props.children}</>;
};
export default PrivateRoute;
