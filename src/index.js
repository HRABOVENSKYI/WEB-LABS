import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalProvider } from "./context/GlobalState";

ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
