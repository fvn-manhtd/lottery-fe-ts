import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "redux/app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ConnectedRouter } from "connected-react-router";
import { history } from "utils/history";
import { GlobalStyles, theme } from "utils";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
