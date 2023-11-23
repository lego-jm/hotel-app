import React from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import { useLocation } from "react-router-dom";
import AdminAddOrUpdate from "../../components/admin/AdminAddOrUpdate";

export default function AdminRoomDetail() {
  const { state } = useLocation();

  return (
    <AdminPannel>
      <section className="w-4/6 p-3 flex flex-col justify-start mx-auto my-10">
        <AdminAddOrUpdate state={state} />
      </section>
    </AdminPannel>
  );
}
