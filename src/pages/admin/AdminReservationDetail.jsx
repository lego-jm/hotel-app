import React from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminReservationUpdate from "../../components/admin/reservation/AdminReservationUpdate";

export default function AdminReservationDetail() {
  return (
    <AdminPannel>
      <section className="w-4/6 p-3 flex flex-col justify-start mx-auto my-10">
        <AdminReservationUpdate />
      </section>
    </AdminPannel>
  );
}
