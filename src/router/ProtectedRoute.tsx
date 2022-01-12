import { useAppDispatch } from "redux/app/hooks";
import { push } from "connected-react-router";
import { Route as ROUTES } from "utils";

export const ProtectedRoute = (ProtectedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      const dispatch = useAppDispatch();
      if (!isLoggedIn) {
        dispatch(push(ROUTES.USER_LOGIN));
      } else {
        return <ProtectedComponent {...props} />;
      }
    }

    return null;
  };
};
