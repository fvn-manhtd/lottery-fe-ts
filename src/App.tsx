import { Route as ROUTES } from "utils";
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
  ShopTopPage,
  ShopLotteryListPage,
  ShopLotteryDetailPage,
  SiteUsagePolicyPage,
  SiteCompanyPage,
  SitePrivacyPolicyPage,
  SiteLegalInformationPage,
  SiteNewsListPage,
  SiteNewsDetailPage,
  UserFavoritePage,
  UserShippingAddressPage,
  UserCardPage,
  UserPurchaseHistoryPage,
  UserPurchaseHistoryDetailPage,
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
          {/* general pages */}
          <FancyRoute 
            path={ROUTES.TOP} 
            exact 
            component={() => <SiteTopPage />} 
          />
          <FancyRoute 
            path={ROUTES.EXAMPLE} 
            exact 
            component={() => <ExamplePage />} 
          />
          <FancyRoute 
            path={ROUTES.STATIC_USAGE_POLICY} 
            exact 
            component={() => <SiteUsagePolicyPage />} 
          />
          <FancyRoute 
            path={ROUTES.STATIC_POLICY} 
            exact 
            component={() => <SitePrivacyPolicyPage />} 
          />
          <FancyRoute 
            path={ROUTES.STATIC_COMPANY} 
            exact 
            component={() => <SiteCompanyPage />} 
          />
          <FancyRoute 
            path={ROUTES.STATIC_LEGAL} 
            exact 
            component={() => <SiteLegalInformationPage />} 
          />
          <FancyRoute 
            path={ROUTES.NEWS_LIST} 
            exact 
            component={() => <SiteNewsListPage />} 
          />
          <FancyRoute 
            path={ROUTES.NEWS_DETAIL} 
            exact 
            component={() => <SiteNewsDetailPage />} 
          />

          {/* lottery pages */}
          <FancyRoute 
            path={ROUTES.LOTTERY_LIST} 
            exact 
            component={() => <SiteLotteryListPage/>} 
          />
          <FancyRoute
            path={ROUTES.EXAMPLE}
            exact
            component={() => <ExamplePage />}
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

          {/* shop front pages */}
          <FancyRoute
            path={ROUTES.SHOP_TOP}
            exact
            component={() => <ShopTopPage />}
          />
          <FancyRoute
            path={ROUTES.SHOP_LOTTERY_LIST}
            exact
            component={() => <ShopLotteryListPage />}
          />
          <FancyRoute
            path={ROUTES.SHOP_LOTTERY_DETAIL}
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
