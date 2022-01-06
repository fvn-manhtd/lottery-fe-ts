import { Route as ROUTES, ErrorFallback } from "utils";
import { Route, Switch, useLocation } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useMemo } from "react";
import {
  ProtectedRoute,
  Loading,
  TopPage,
  ExamplePage,
  LotteryListPage,
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
  UsagePolicyPage,
  CompanyPage,
  PrivacyPolicyPage,
  LegalInformationPage,
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
  UserRegisterCompletePage
} from "router";

import { Suspense } from "react";

import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LotteryIndexSkeletonPage, TopPageSkeletonPage } from "components/organisms";


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
  
  const location=useLocation();
  const preservedRoutes: Array<string> = [ROUTES.HOME,ROUTES.LOTTERIES];

  return (
    <>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
          
        {/* lottery index page */}
        <Suspense fallback={<LotteryIndexSkeletonPage />}>
          <Switch>
            <FancyRoute 
              path={ROUTES.LOTTERIES} 
              exact 
              component={() => <LotteryListPage/>} 
            />
          </Switch>
        </Suspense>

        {/* top page */}
        <Suspense fallback={<TopPageSkeletonPage />}>
          <Switch>
            <FancyRoute 
              path={ROUTES.HOME} 
              exact 
              component={() => <TopPage/>} 
            />
          </Switch>
        </Suspense>

        {/* general pages */}
        <Suspense fallback={<Loading />}>
          <Switch>
            <FancyRoute 
              path={ROUTES.STATIC_USAGE_POLICY} 
              exact 
              component={() => <UsagePolicyPage />} 
            />
            <FancyRoute 
              path={ROUTES.STATIC_POLICY} 
              exact 
              component={() => <PrivacyPolicyPage />} 
            />
            <FancyRoute 
              path={ROUTES.STATIC_COMPANY} 
              exact 
              component={() => <CompanyPage />} 
            />
            <FancyRoute 
              path={ROUTES.STATIC_LEGAL} 
              exact 
              component={() => <LegalInformationPage />} 
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

            {/* user auth pages */}
            <FancyRoute
              path={ROUTES.USER_LOGIN}
              exact
              component={() => <UserLoginPage />}
            />
            <FancyRoute
              path={ROUTES.USER_NEW_PASSWORD}
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

            {/* shop auth pages */}
            <FancyRoute
              path={ROUTES.SHOP_LOGIN}
              exact
              component={() => <ShopLoginPage />}
            />
            <FancyRoute
              path={ROUTES.SHOP_REGISTER}
              exact
              component={() => <ShopRegisterPage />}
            />
            <FancyRoute
              path={ROUTES.SHOP_REGISTER_CREATE_ACCOUNT}
              exact
              component={() => <ShopCreateAccountPage />}
            />
            <FancyRoute
              path={ROUTES.SHOP_REGISTER_OPERATION_SETTING}
              exact
              component={() => <ShopOperationSettingPage />}
            />
            <FancyRoute
              path={ROUTES.SHOP_PASSWORD_FORGOT}
              exact
              component={() => <ShopPasswordForgotPage />}
            />
            <FancyRoute
              path={ROUTES.SHOP_NEW_PASSWORD}
              exact
              component={() => <ShopNewPasswordPage />}
            />
            <FancyRoute
              path={ROUTES.SHOP_PASSWORD_FORGOT_CONFIRM_MAIL}
              exact
              component={() => <ShopPasswordForgotConfirmMailPage />}
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
            {/** other */}
            <FancyRoute
              path={ROUTES.EXAMPLE}
              exact
              component={() => <ExamplePage />}
            />
            {/* error page */}
            {
              !preservedRoutes.includes(location.pathname) &&
              <FancyRoute path="**" component={() => <Error404Page />} />
            }
            
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <ToastContainer autoClose={2000} />
    </>
  );
}
