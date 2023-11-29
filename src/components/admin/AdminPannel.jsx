import React from "react";
import AdminSideBar from "./AdminSideBar";

export default function AdminPannel({ children }) {
  return (
    <section className="flex min-h-screen">
      <AdminSideBar />
      {children}
    </section>
  );
}
