import { Route as ROUTES } from "utils";
import { Route, Switch } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useMemo } from "react";
import {
  ProtectedRoute,
  Loading,
  TopPage,
  LotteryListPage,
  UserMyPage,
  UserLoginPage,
  Error404Page,
  UserNewPasswordPage,
  UserPasswordForgotPage,
  UserPasswordForgotConfirmMailPage,
  UserRegisterPage,
  NewsListPage,
  NewsDetailPage,
  UserFavoritePage,
  UserShippingAddressPage,
  UserCardPage,
  UserPurchaseHistoryPage,
  UserPurchaseHistoryDetailPage,
  ShoppingCartPage,
  PaymentMethodPage,
  OrderConfirmationPage,
  OrderCompletePage,
  EffectStartPage,
  EffectFinishPage,
  ContactPage,
  UserRegisterConfirmMailPage,
  UserRegisterCompletePage,
  ContactConfirmPage,
  ContactCompletePage,
  StaticPage,
} from "router";

import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      {/* general pages */}
      <Suspense fallback={<Loading />}>
        <Switch>
          <FancyRoute path={ROUTES.HOME} exact component={() => <TopPage />} />
          <FancyRoute
            path={ROUTES.LOTTERIES}
            exact
            component={() => <LotteryListPage />}
          />
          <FancyRoute
            path={ROUTES.STATIC_PAGE}
            exact
            component={() => <StaticPage />}
          />
          <FancyRoute
            path={ROUTES.NEWS_LIST}
            exact
            component={() => <NewsListPage />}
          />
          <FancyRoute
            path={ROUTES.NEWS_DETAIL}
            exact
            component={() => <NewsDetailPage />}
          />

          <FancyRoute
            path={ROUTES.CONTACT}
            exact
            component={() => <ContactPage />}
          />
          <FancyRoute
            path={ROUTES.CONTACT_CONFIRM}
            exact
            component={() => <ContactConfirmPage />}
          />
          <FancyRoute
            path={ROUTES.CONTACT_COMPLETE}
            exact
            component={() => <ContactCompletePage />}
          />

          {/* user pages */}
          <FancyRoute
            path={ROUTES.USER_MYAPGE}
            exact
            component={ProtectedRoute(UserMyPage)}
          />
          <FancyRoute
            path={ROUTES.USER_FAVORITE}
            exact
            component={ProtectedRoute(UserFavoritePage)}
          />
          <FancyRoute
            path={ROUTES.USER_SHIPPING_ADDRESS}
            exact
            component={ProtectedRoute(UserShippingAddressPage)}
          />
          <FancyRoute
            path={ROUTES.USER_CARD}
            exact
            component={ProtectedRoute(UserCardPage)}
          />

          <FancyRoute
            path={ROUTES.USER_PURCHASED_HISTORY}
            exact
            component={ProtectedRoute(UserPurchaseHistoryPage)}
          />
          <FancyRoute
            path={ROUTES.USER_PURCHASED_HISTORY_DETAIL}
            exact
            component={ProtectedRoute(UserPurchaseHistoryDetailPage)}
          />

          {/* user auth pages */}
          <FancyRoute
            path={ROUTES.USER_LOGIN}
            exact
            component={() => <UserLoginPage />}
          />
          <FancyRoute
            path={ROUTES.USER_PASSWORD_RESET}
            exact
            component={() => <UserNewPasswordPage />}
          />
          <FancyRoute
            path={ROUTES.USER_PASSWORD_FORGOT}
            exact
            component={() => <UserPasswordForgotPage />}
          />
          <FancyRoute
            path={ROUTES.USER_PASSWORD_FORGOT_CONFIRM_MAIL}
            exact
            component={() => <UserPasswordForgotConfirmMailPage />}
          />
          <FancyRoute
            path={ROUTES.USER_REGISTER}
            exact
            component={() => <UserRegisterPage />}
          />

          <FancyRoute
            path={ROUTES.USER_REGISTER_CONFIRM_MAIL}
            exact
            component={() => <UserRegisterConfirmMailPage />}
          />

          <FancyRoute
            path={ROUTES.USER_REGISTER_COMPLETE}
            exact
            component={() => <UserRegisterCompletePage />}
          />

          {/* cart pages */}
          <FancyRoute
            path={ROUTES.SHOPPING_CART}
            exact
            component={ShoppingCartPage}
          />
          <FancyRoute
            path={ROUTES.PAYMENT_METHOD}
            exact
            component={ProtectedRoute(PaymentMethodPage)}
          />
          <FancyRoute
            path={ROUTES.ORDER_CONFIRMATION}
            exact
            component={ProtectedRoute(OrderConfirmationPage)}
          />
          <FancyRoute
            path={ROUTES.ORDER_COMPLETE}
            exact
            component={ProtectedRoute(OrderCompletePage)}
          />
          <FancyRoute
            path={ROUTES.EFFECT_START}
            exact
            component={ProtectedRoute(EffectStartPage)}
          />
          <FancyRoute
            path={ROUTES.EFFECT_FINISH}
            exact
            component={ProtectedRoute(EffectFinishPage)}
          />

          {/* error page */}
          <FancyRoute path="**" component={() => <Error404Page />} />
        </Switch>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </>
  );
}
