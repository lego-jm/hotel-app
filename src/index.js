import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Reservation from "./pages/Reservation";
import Intro from "./pages/Intro";
import JoinMembership from "./pages/JoinMembeship";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/rooms", element: <Rooms /> },
      { path: "/rooms/:roomId", element: <RoomDetail /> },
      { path: "/reservation/:roomId", element: <Reservation /> },
      { path: "/intro", element: <Intro /> },
      { path: "/login", element: <Login /> },
      { path: "/member", element: <JoinMembership /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
