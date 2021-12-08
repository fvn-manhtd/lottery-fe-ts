import { Route, Switch } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useMemo } from "react";
import {
  ProtectedRoute,
  Loading,
  HomePage,
  ExamplePage,
  LotteriesPage,
  UserMyPage,
  UserLoginPage,
  ShopLoginPage,
  Error404Page,
  UserNewPasswordPage,
  UserPasswordForgotPage,
  UserPasswordForgotConfirmMailPage,
  UserRegisterPage,
  ShopRegisterPage,
  ShopNewPasswordPage,
  ShopPasswordForgotConfirmMailPage,
  ShopPasswordForgotPage,
  ShopCreateAccountPage,
  ShopOperationSettingPage,
  UserFavoritePage,
  UserShippingAddressPage,
  UserCardPage,
  UserPurchaseHistoryPage,
  UserReceiptPage,
} from "router";

import { Suspense } from "react";

const FancyRoute = (props) => {
  useMemo(() => {
    nprogress.configure({ showSpinner: false });
    nprogress.start();
  }, []);

  useEffect(() => {
    nprogress.done();
  }, []);

  return <Route {...props} />;
};

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {/* home page */}
          <FancyRoute path="/" exact component={() => <HomePage />} />
          <FancyRoute path="/example" exact component={() => <ExamplePage />} />

          {/* lottery page */}
          <FancyRoute
            path="/lotteries"
            exact
            component={() => <LotteriesPage />}
          />

          {/* user pages */}
          <FancyRoute
            path="/user/mypage"
            exact
            component={ProtectedRoute(UserMyPage)}
          />
          <FancyRoute
            path="/user/favorite"
            exact
            component={ProtectedRoute(UserFavoritePage)}
          />
          <FancyRoute
            path="/user/shipping-address"
            exact
            component={ProtectedRoute(UserShippingAddressPage)}
          />
          <FancyRoute
            path="/user/card"
            exact
            component={ProtectedRoute(UserCardPage)}
          />
          <FancyRoute
            path="/user/purchase-history"
            exact
            component={ProtectedRoute(UserPurchaseHistoryPage)}
          />
          <FancyRoute
            path="/user/receipt"
            exact
            component={ProtectedRoute(UserReceiptPage)}
          />

          {/* user auth pages */}
          <FancyRoute
            path="/user/login"
            exact
            component={() => <UserLoginPage />}
          />
          <FancyRoute
            path="/user/new-password"
            exact
            component={() => <UserNewPasswordPage />}
          />
          <FancyRoute
            path="/user/password-forgot"
            exact
            component={() => <UserPasswordForgotPage />}
          />
          <FancyRoute
            path="/user/password-forgot-confirm-mail"
            exact
            component={() => <UserPasswordForgotConfirmMailPage />}
          />
          <FancyRoute
            path="/user/register"
            exact
            component={() => <UserRegisterPage />}
          />

          {/* shop auth pages */}
          <FancyRoute
            path="/shop/login"
            exact
            component={() => <ShopLoginPage />}
          />
          <FancyRoute
            path="/shop/register"
            exact
            component={() => <ShopRegisterPage />}
          />
          <FancyRoute
            path="/shop/register/create-account"
            exact
            component={() => <ShopCreateAccountPage />}
          />
          <FancyRoute
            path="/shop/register/operation-setting"
            exact
            component={() => <ShopOperationSettingPage />}
          />

          <FancyRoute
            path="/shop/password-forgot"
            exact
            component={() => <ShopPasswordForgotPage />}
          />
          <FancyRoute
            path="/shop/new-password"
            exact
            component={() => <ShopNewPasswordPage />}
          />
          <FancyRoute
            path="/shop/password-forgot-confirm-mail"
            exact
            component={() => <ShopPasswordForgotConfirmMailPage />}
          />

          {/* error page */}
          <FancyRoute path="**" component={() => <Error404Page />} />
        </Switch>
      </Suspense>
    </>
  );
}
