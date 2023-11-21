import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoomCard({ room: { title, people } }) {
  return (
    <li className="flex justify-between text-center">
      <span className="basis-1/6">1</span>
      <span className="basis-3/6">{title}</span>
      <span className="basis-1/6">{`${people}명`}</span>
      <span
        className="basis-1/6 cursor-pointer"
        onClick={() => Navigate(`/admin/rooms/add`)}
      >
        상세보기
      </span>
    </li>
  );
}
