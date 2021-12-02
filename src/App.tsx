import { Error404Page } from "pages/generals/Error404Page";
import { Route, Switch } from "react-router-dom";
import { HomePage, ExamplePage, MyPage, UserLoginPage } from "./pages";

export default function App() {
  return (
    <>
      <Switch>
        {/* home page */}
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/example" exact component={() => <ExamplePage />} />

        {/* auth pages */}
        <Route path="/user/mypage" exact component={() => <MyPage />} />
        <Route path="/user/login" exact component={() => <UserLoginPage />} />

        {/* error page */}
        <Route path="**" component={() => <Error404Page />} />
      </Switch>
    </>
  );
}
