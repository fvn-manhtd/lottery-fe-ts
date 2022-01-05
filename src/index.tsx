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
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

ReactDOM.render(
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
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
