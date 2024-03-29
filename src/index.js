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
import ProtectRoute from "./components/ProtectRoute";
import AdminRooms from "./pages/admin/AdminRooms";
import AdminAddRoom from "./pages/admin/AdminAddRoom";
import AdminRoomDetail from "./pages/admin/AdminRoomDetail";
import MyPage from "./pages/MyPage";
import ReservationCheck from "./pages/ReservationCheck";
import MyPageDatail from "./pages/MyPageDatail";
import Attraction from "./pages/Attraction";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminAttraction from "./pages/admin/AdminAttraction";
import AdminReservation from "./pages/admin/AdminReservation";
import AdminAddAttraction from "./pages/admin/AdminAddAttraction";
import AdminAttractionDetail from "./pages/admin/AdminAttractionDetail";
import AdminUserDetail from "./pages/admin/AdminUserDetail";
import AdminReservationDetail from "./pages/admin/AdminReservationDetail";
import ReservationDetail from "./pages/ReservationDetail";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();
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
      {
        path: "/reservation/:roomId",
        element: (
          <ProtectRoute>
            <Reservation />
          </ProtectRoute>
        ),
      },
      {
        path: "/reservation/check",
        element: (
          <ProtectRoute>
            <ReservationCheck />
          </ProtectRoute>
        ),
      },
      {
        path: "/reservation/check/:reservationId",
        element: (
          <ProtectRoute>
            <ReservationDetail />
          </ProtectRoute>
        ),
      },
      { path: "/intro", element: <Intro /> },
      { path: "/attraction", element: <Attraction /> },
      { path: "/login", element: <Login /> },
      { path: "/member", element: <JoinMembership /> },
      {
        path: "/mypage",
        element: (
          <ProtectRoute>
            <MyPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/mypage/info",
        element: (
          <ProtectRoute>
            <MyPageDatail />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/rooms",
        element: (
          <ProtectRoute requireAdmin>
            <AdminRooms />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/rooms/add",
        element: (
          <ProtectRoute requireAdmin>
            <AdminAddRoom />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/rooms/:roomId",
        element: (
          <ProtectRoute requireAdmin>
            <AdminRoomDetail />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/users",
        element: (
          <ProtectRoute requireAdmin>
            <AdminUsers />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/users/:uid",
        element: (
          <ProtectRoute requireAdmin>
            <AdminUserDetail />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/attraction",
        element: (
          <ProtectRoute requireAdmin>
            <AdminAttraction />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/attraction/add",
        element: (
          <ProtectRoute requireAdmin>
            <AdminAddAttraction />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/attraction/:attractionId",
        element: (
          <ProtectRoute requireAdmin>
            <AdminAttractionDetail />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/reservation",
        element: (
          <ProtectRoute requireAdmin>
            <AdminReservation />
          </ProtectRoute>
        ),
      },
      {
        path: "/admin/reservation/:reservationId",
        element: (
          <ProtectRoute requireAdmin>
            <AdminReservationDetail />
          </ProtectRoute>
        ),
      },
    ],
  },
  // { path: "/payment", element: <CheckoutPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
