import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import SignIn from "./pages/SignIn.jsx";
import User from "./pages/User.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// REDUX
import { Provider } from "react-redux";
import { store } from "./app/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
