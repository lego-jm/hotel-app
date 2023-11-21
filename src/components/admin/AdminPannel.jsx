import React from "react";
import AdminSideBar from "./AdminSideBar";

export default function AdminPannel({ children }) {
  return (
    <section className="h-screen flex">
      <AdminSideBar />
      {children}
    </section>
  );
}
