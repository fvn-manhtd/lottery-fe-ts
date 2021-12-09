import { Route, Switch } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useMemo } from "react";
import {
  ProtectedRoute,
  Loading,
  SiteTopPage,
  ExamplePage,
  SiteLotteryListPage,
  MyPage,
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
  ShopTopPage,
  ShopLotteryListPage,
  ShopLotteryDetailPage,
  SiteUsagePolicyPage,
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
          <FancyRoute path="/" exact component={() => <SiteTopPage />} />
          <FancyRoute path="/example" exact component={() => <ExamplePage />} />
          <FancyRoute path="/static-pages/usage-policy" exact component={() => <SiteUsagePolicyPage />} />

          {/* lottery page */}
          <FancyRoute path="/lotteries" exact component={() => <SiteLotteryListPage/>} />

          {/* user pages */}
          <FancyRoute
            path="/user/mypage"
            exact
            component={ProtectedRoute(MyPage)}
          />
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

          {/* shop pages */}
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

          {/* shop front pages */}
          <FancyRoute
            path="/:shop"
            exact
            component={() => <ShopTopPage />}
          />
          <FancyRoute
            path="/:shop/lotteries"
            exact
            component={() => <ShopLotteryListPage />}
          />
          <FancyRoute
            path="/:shop/lottery/:id"
            exact
            component={() => <ShopLotteryDetailPage />}
          />

          {/* error page */}
          <FancyRoute path="**" component={() => <Error404Page />} />
        </Switch>
      </Suspense>
    </>
  );
}
