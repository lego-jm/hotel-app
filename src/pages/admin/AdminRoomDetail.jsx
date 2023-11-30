import React from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminAddOrUpdate from "../../components/admin/room/AdminAddOrUpdate";
import { useLocation } from "react-router-dom";

export default function AdminRoomDetail() {
  const {
    state: { room: currentRoom },
  } = useLocation();
  return (
    <AdminPannel>
      <section className="w-4/6 p-3 flex flex-col justify-start mx-auto my-10">
        <AdminAddOrUpdate currentRoom={currentRoom} />
      </section>
    </AdminPannel>
  );
}
