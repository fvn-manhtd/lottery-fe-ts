import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "redux/app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ConnectedRouter, push } from "connected-react-router";
import { history } from "utils/history";
import { GlobalStyles, theme } from "utils";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { axiosClient } from "api";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Route as ROUTES } from "utils";
import { authActions } from "redux/features";
import { toast } from "react-toastify";

let persistor = persistStore(store);

const router = (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);

/** Intercept any unauthorized request.
 * dispatch logout action accordingly **/
const { dispatch } = store;
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    const { status, data } = response;
    if ((status === 200 || status === 201) && data.status === "success")
      return response;
  },
  function (error) {
    const { status, data } = error.response;
    switch (status) {
      case 401: // HTTP_UNAUTHORIZED
        dispatch(push(ROUTES.USER_LOGIN));
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("persist:gacha");
        dispatch(authActions.reset());
        toast.error(data.message, { autoClose: 7000 });

        break;

      case 400: // HTTP_BAD_REQUEST
      case 403: // HTTP_FORBIDDEN
      case 404: // HTTP_NOT_FOUND
      case 422: // HTTP_UNPROCESSABLE_ENTITY
      case 500: // HTTP_INTERNAL_SERVER_ERROR
        toast.error(data.message, {
          autoClose: 7000,
        });
        break;
      default:
        toast.error(data.message, {
          autoClose: 7000,
        });
        break;
    }
    return Promise.reject(error);
  }
);

ReactDOM.render(router, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
