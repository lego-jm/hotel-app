import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminRoomCard({
  room,
  room: { title, people, id },
  no,
  length,
}) {
  const navigate = useNavigate();

  return (
    <li className="flex justify-between text-center">
      <span className="basis-1/6">{-no + length}</span>
      <span className="basis-3/6">{title}</span>
      <span className="basis-1/6">{`${people}명`}</span>
      <span
        className="basis-1/6 cursor-pointer"
        onClick={() => navigate(`/admin/rooms/${id}`, { state: { room } })}
      >
        상세보기
      </span>
    </li>
  );
}
