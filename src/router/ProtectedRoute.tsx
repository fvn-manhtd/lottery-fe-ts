import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { selectIsLoggedIn } from "redux/features";
import { push } from "connected-react-router";

export const ProtectedRoute = (ProtectedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const isLoggedIn = useAppSelector(selectIsLoggedIn);
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
