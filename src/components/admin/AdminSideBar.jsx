import React from "react";
import { useNavigate } from "react-router-dom";

// const menuList =

export default function AdminSideBar() {
  const navigate = useNavigate();
  return (
    <ul className="p-10 flex flex-col gap-5 border-r border-gray-400 w-2/12 h-full">
      <li
        onClick={() => navigate("/admin/rooms")}
        className="cursor-pointer transition-all hover:text-theme-color"
      >
        객실
      </li>
      <li
        onClick={() => navigate("/admin/rooms")}
        className="cursor-pointer transition-all hover:text-theme-color"
      >
        다이닝
      </li>
      <li
        onClick={() => navigate("/admin/rooms")}
        className="cursor-pointer transition-all hover:text-theme-color"
      >
        예약관리
      </li>
    </ul>
  );
}
