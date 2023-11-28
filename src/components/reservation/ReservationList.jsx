import React from "react";
import { useReservation } from "../../hooks/useReservation";
import moment from "moment";
import ReservationCard from "./ReservationCard";

export default function ReservationList({ reservationDate }) {
  const {
    getReservationQuery: { isLoading, error, data: reservations },
  } = useReservation();
  let filteredList = [];

  if (reservationDate) {
    filteredList = reservations?.filter((reservation) => {
      const createdDate = moment(reservation.createdDate).format("YYYY-MM-DD");
      const startDate = moment(reservationDate?.startDate).format("YYYY-MM-DD");
      const endDate = moment(reservationDate?.endDate).format("YYYY-MM-DD");

      return createdDate >= startDate && createdDate <= endDate;
    });
  }

  return (
    <article className="mt-5">
      <ul className="flex flex-col text-center">
        <li className="flex justify-between border-y border-gray-500 py-5">
          <span className="basis-1/6">No.</span>
          <span className="basis-2/6">숙박기간</span>
          <span className="basis-1/6">숙박인원</span>
          <span className="basis-2/6">예약일</span>
        </li>
        {filteredList?.length !== 0 ? (
          filteredList?.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))
        ) : (
          <li className="text-lg py-5">예약 내역이 없습니다.</li>
        )}
      </ul>
    </article>
  );
}
