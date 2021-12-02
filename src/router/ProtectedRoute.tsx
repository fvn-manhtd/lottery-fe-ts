import { useAppSelector } from "redux/app/hooks";
import { selectIsLoggedIn } from "redux/features";
import { useHistory } from "react-router";

const ProtectedRoute = (ProtectedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const history = useHistory();
      const isLoggedIn = useAppSelector(selectIsLoggedIn);
      if (!isLoggedIn) {
        history.push("/user/login");
      } else {
        return <ProtectedComponent {...props} />;
      }
    }

    return null;
  };
};

export default ProtectedRoute;
