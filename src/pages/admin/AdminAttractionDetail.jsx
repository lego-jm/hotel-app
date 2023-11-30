import React from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminAttractionAddOrUpdate from "../../components/admin/attraction/AdminAttractionAddOrUpdate";
import { useLocation } from "react-router-dom";

export default function AdminAttractionDetail() {
  const {
    state: { attraction: currentAttraction },
  } = useLocation();
  return (
    <AdminPannel>
      <section className="w-4/6 p-3 flex flex-col justify-start mx-auto my-10">
        <AdminAttractionAddOrUpdate currentAttraction={currentAttraction} />
      </section>
    </AdminPannel>
  );
}
