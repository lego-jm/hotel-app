import React from "react";

import AdminButton from "../../components/admin/AdminButton";

export default function AdminHome() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h3 className="text-center text-2xl mb-10">항목을 선택하세요</h3>
      <AdminButton text="객실" link="/admin/rooms" />
    </div>
  );
}
