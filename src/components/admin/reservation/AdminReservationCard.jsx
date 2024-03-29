import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminReservationCard({
  reservation,
  reservation: {
    startDate,
    endDate,
    createdDate,
    no,
    firstName,
    lastName,
    status,
  },
  offset,
  length,
  index,
}) {
  const navigate = useNavigate();
  return (
    <li className="flex justify-between text-center">
      <span className="basis-1/6">{length - offset - index}</span>
      <span className="basis-2/6">
        {startDate} ~ {endDate}
      </span>
      <span className="basis-1/6">
        {firstName} {lastName}
      </span>
      <span className="basis-1/6">
        {status === "confirm" && "예약확정"}
        {status === "cancle" && "예약취소"}
        {status === "ing" && "예약진행중"}
      </span>
      <span className="basis-1/6">{createdDate}</span>
      <span
        className="basis-1/6 cursor-pointer"
        onClick={() =>
          navigate(`/admin/reservation/${no}`, { state: { reservation } })
        }
      >
        상세보기
      </span>
    </li>
  );
}
