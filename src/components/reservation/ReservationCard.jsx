import React from "react";
import { Link } from "react-router-dom";

export default function ReservationCard({
  reservation,
  offset,
  length,
  index,
}) {
  const { startDate, endDate, no, people, createdDate, roomTitle } =
    reservation;

  return (
    <li className="flex justify-between py-5 border-b border-300">
      <p className="basis-1/6">{length - offset - index}</p>
      <p className="sm:basis-2/6 basis-1/6 break-words line-clamp-3">
        {startDate} ~ {endDate}
      </p>
      <Link
        to={`/reservation/check/${no}`}
        state={reservation}
        className="basis-1/6 underline break-keep cursor-pointer hover:text-theme-color"
      >
        {roomTitle}
      </Link>
      <p className="basis-1/6">{`${people}명`}</p>
      <p className="basis-1/6 break-words">{createdDate}</p>
    </li>
  );
}
