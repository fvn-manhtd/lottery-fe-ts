import { Error404Page } from "pages/generals/Error404Page";
import { Route, Switch } from "react-router-dom";
import { HomePage, ExamplePage, MyPage, UserLoginPage } from "./pages";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useMemo } from "react";

const FancyRoute = (props) => {
  useMemo(() => {
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
      <Switch>
        {/* home page */}
        <FancyRoute path="/" exact component={() => <HomePage />} />
        <FancyRoute path="/example" exact component={() => <ExamplePage />} />

        {/* mypage pages */}
        <FancyRoute path="/user/mypage" exact component={() => <MyPage />} />
        <FancyRoute
          path="/user/login"
          exact
          component={() => <UserLoginPage />}
        />

        {/* error page */}
        <FancyRoute path="**" component={() => <Error404Page />} />
      </Switch>
    </>
  );
}
