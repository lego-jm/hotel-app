import React from "react";
import AdminSideBar from "./AdminSideBar";

export default function AdminPannel({ children }) {
  return (
    <section className="flex">
      <AdminSideBar />
      {children}
    </section>
  );
}
