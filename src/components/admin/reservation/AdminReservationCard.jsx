import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminReservationCard({
  reservation,
  reservation: { userName, reservationDate, createdDate, id },
  offset,
  length,
  no,
}) {
  const navigate = useNavigate();
  return (
    <li className="flex justify-between text-center">
      <span className="basis-1/6">{length - offset - no}</span>
      <span className="basis-2/6">
        {reservationDate.startDate} ~ {reservationDate.endDate}
      </span>
      <span className="basis-1/6">{userName}</span>
      <span className="basis-1/6">{createdDate}</span>
      <span
        className="basis-1/6 cursor-pointer"
        onClick={() =>
          navigate(`/admin/reservation/${id}`, { state: { reservation } })
        }
      >
        상세보기
      </span>
    </li>
  );
}
