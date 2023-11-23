import React from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminAddOrUpdate from "../../components/admin/AdminAddOrUpdate";

export default function AdminAddRoom() {
  return (
    <AdminPannel>
      <section className="w-4/6 p-3 flex flex-col justify-start mx-auto my-10">
        <AdminAddOrUpdate />
      </section>
    </AdminPannel>
  );
}
