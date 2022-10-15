import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
import FavoritesContextProvider from "./context/FavoritesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Route>
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </Route>
);
