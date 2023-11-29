import React from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminAttractionAddOrUpdate from "../../components/admin/attraction/AdminAttractionAddOrUpdate";

export default function AdminAddAttraction() {
  return (
    <AdminPannel>
      <section className="w-4/6 p-3 flex flex-col justify-start mx-auto my-10">
        <AdminAttractionAddOrUpdate />
      </section>
    </AdminPannel>
  );
}
