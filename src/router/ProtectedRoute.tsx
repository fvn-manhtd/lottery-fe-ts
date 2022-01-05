import { useAppDispatch } from "redux/app/hooks";
import { push } from "connected-react-router";

export const ProtectedRoute = (ProtectedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      const dispatch = useAppDispatch();
      if (!isLoggedIn) {
        dispatch(push("/user/login"));
      } else {
        return <ProtectedComponent {...props} />;
      }
    }

    return null;
  };
};
