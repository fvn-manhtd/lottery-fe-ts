import { Route, Switch } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useMemo } from "react";
import {
  ProtectedRoute,
  Loading,
  HomePage,
  ExamplePage,
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
