import React from "react";
import { Link } from "react-router-dom";

export default function ReservationCard({ reservation, offset, length, no }) {
  const { reservationDate } = reservation;

  return (
    <li className="flex justify-between py-5 border-b border-300">
      <p className="basis-1/6">{length - offset - no}</p>
      <p className="basis-2/6">
        {reservationDate.startDate} ~ {reservationDate.endDate}
      </p>
      <Link
        to={`/reservation/check/${reservation.id}`}
        state={reservation}
        className="basis-1/6 underline cursor-pointer hover:text-theme-color"
      >
        {reservation.roomTitle}
      </Link>
      <p className="basis-1/6">{`${reservation.people}명`}</p>
      <p className="basis-1/6">{reservation.createdDate}</p>
    </li>
  );
}
