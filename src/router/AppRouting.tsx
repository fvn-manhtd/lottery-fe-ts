import { FlexBox, Spinner } from "components/atoms";
import { lazy } from "react";

/* homepage */
export const TopPage = lazy(
  () => import("pages/generals/TopPage")
);
export const ExamplePage = lazy(
  () => import("pages/generals/ExamplePage")
);

export const NewsListPage = lazy(
  ()=> import("pages/generals/NewsListPage")
);
export const NewsDetailPage = lazy(
  ()=> import("pages/generals/NewsDetailPage")
);
/* static pages */
export const UsagePolicyPage = lazy(
  ()=> import("pages/static/UsagePolicyPage")
);
export const PrivacyPolicyPage = lazy(
  ()=> import("pages/static/PrivacyPolicyPage")
);
export const CompanyPage = lazy(
  ()=> import("pages/static/CompanyPage")
);
export const LegalInformationPage = lazy(
  ()=> import("pages/static/LegalInformationPage")
);

/*lottery pages */
export const LotteryListPage = lazy(
  () => import("pages/generals/LotteryListPage")
);

/* user pages */
export const UserMyPage = lazy(() => import("pages/user/UserMyPage"));
export const UserFavoritePage = lazy(
  () => import("pages/user/UserFavoritePage")
);
export const UserShippingAddressPage = lazy(
  () => import("pages/user/UserShippingAddressPage")
);

export const UserCardPage = lazy(() => import("pages/user/UserCardPage"));
export const UserPurchaseHistoryPage = lazy(
  () => import("pages/user/UserPurchaseHistoryPage")
);

export const UserPurchaseHistoryDetailPage = lazy(
  () => import("pages/user/UserPurchaseHistoryDetailPage")
);

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
export const ShopLoginPage = lazy(
  () => import("pages/shop/ShopLoginPage")
);
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

/* Cart pages */
export const ShoppingCartPage = lazy(
  () => import("pages/cart/ShoppingCartPage")
);
export const PaymentMethodPage = lazy(
  () => import("pages/cart/PaymentMethodPage")
);
export const OrderConfirmationPage = lazy(
  () => import("pages/cart/OrderConfirmationPage")
);
export const OrderCompletePage = lazy(
  () => import("pages/cart/OrderCompletePage")
);
export const EffectStartPage = lazy(() => import("pages/cart/EffectStartPage"));
export const EffectFinishPage = lazy(
  () => import("pages/cart/EffectFinishPage")
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
