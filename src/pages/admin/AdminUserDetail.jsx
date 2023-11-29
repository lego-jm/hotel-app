import React from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminUserUpdate from "../../components/admin/user/AdminUserUpdate";

export default function AdminUserDetail() {
  return (
    <AdminPannel>
      <section className="w-4/6 p-3 flex flex-col justify-start mx-auto my-10">
        <AdminUserUpdate />
      </section>
    </AdminPannel>
  );
}
