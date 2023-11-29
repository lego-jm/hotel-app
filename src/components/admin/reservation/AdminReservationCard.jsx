import React from "react";

export default function AdminReservationCard({
  reservation: { userName, startDate, endDate, createdDate },
  offset,
  length,
  no,
}) {
  return (
    <li className="flex justify-between text-center">
      <span className="basis-1/6">{length - offset - no}</span>
      <span className="basis-2/6">
        {startDate} ~ {endDate}
      </span>
      <span className="basis-1/6">{userName}</span>
      <span className="basis-1/6">{createdDate}</span>
      <span className="basis-1/6">상세보기</span>
    </li>
  );
}
