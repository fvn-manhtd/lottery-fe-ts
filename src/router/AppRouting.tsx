import { FlexBox, Spinner } from "components/atoms";
import { lazy } from "react";

/* homepage */
export const HomePage = lazy(() => import("pages/generals/HomePage"));
export const ExamplePage = lazy(() => import("pages/generals/ExamplePage"));

/*lottery pages */
export const LotteriesPage = lazy(() => import("pages/generals/Lotteries"));

/* user pages */
export const UserMyPage = lazy(() => import("pages/user/UserMyPage"));
export const UserFavoritePage = lazy(
  () => import("pages/user/UserFavoritePage")
);
export const UserShippingAddressPage = lazy(
  () => import("pages/user/UserShippingAddressPage")
);

export const UserCardPage = lazy(() => import("pages/user/UserCardPage"));

/* user auth pages */
export const UserLoginPage = lazy(() => import("pages/user/UserLoginPage"));
export const UserNewPasswordPage = lazy(
  () => import("pages/user/UserNewPasswordPage")
);
export const UserPasswordForgotConfirmMailPage = lazy(
  () => import("pages/user/UserPasswordForgotConfirmMailPage")
);
export const UserPasswordForgotPage = lazy(
  () => import("pages/user/UserPasswordForgotPage")
);
export const UserRegisterPage = lazy(
  () => import("pages/user/UserRegisterPage")
);
export const UserRegisterConfirmMailPage = lazy(
  () => import("pages/user/UserRegisterConfirmMailPage")
);

/* shop pages */
export const ShopLoginPage = lazy(() => import("pages/shop/ShopLoginPage"));
export const ShopNewPasswordPage = lazy(
  () => import("pages/shop/ShopNewPasswordPage")
);
export const ShopPasswordForgotConfirmMailPage = lazy(
  () => import("pages/shop/ShopPasswordForgotConfirmMailPage")
);
export const ShopPasswordForgotPage = lazy(
  () => import("pages/shop/ShopPasswordForgotPage")
);
export const ShopRegisterPage = lazy(
  () => import("pages/shop/ShopRegisterPage")
);
export const ShopCreateAccountPage = lazy(
  () => import("pages/shop/ShopCreateAccountPage")
);
export const ShopOperationSettingPage = lazy(
  () => import("pages/shop/ShopOperationSettingPage")
);

/* error pages */
export const Error404Page = lazy(() => import("pages/generals/Error404Page"));

/* Loading */
export const Loading = () => {
  return (
    <FlexBox alignItems="center" justifyContent="center" height="100vh">
      <Spinner
        size={60}
        border="6px solid"
        borderColor="primary.main"
        borderTop="6px solid white"
      ></Spinner>
    </FlexBox>
  );
};
