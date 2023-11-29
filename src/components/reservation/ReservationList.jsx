import React, { useState } from "react";
import { useReservation } from "../../hooks/useReservation";
import moment from "moment";
import ReservationCard from "./ReservationCard";
import Pagination from "../Pagination";
import Loading from "../Loading";

export default function ReservationList({ reservationDate }) {
  const {
    getReservationQuery: { isLoading, error, data: reservations },
  } = useReservation();
  let filteredList = [];
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  if (reservationDate) {
    filteredList = reservations?.filter((reservation) => {
      const createdDate = moment(reservation.createdDate).format("YYYY-MM-DD");
      const startDate = moment(reservationDate?.startDate).format("YYYY-MM-DD");
      const endDate = moment(reservationDate?.endDate).format("YYYY-MM-DD");

      return createdDate >= startDate && createdDate <= endDate;
    });
  }

  if (isLoading) return <Loading />;

  return (
    <article className="mt-5">
      <ul className="flex flex-col text-center mb-10">
        <li className="flex justify-between border-y border-gray-500 py-5">
          <span className="basis-1/6">No.</span>
          <span className="basis-2/6">숙박기간</span>
          <span className="basis-1/6">룸 이름</span>
          <span className="basis-1/6">숙박인원</span>
          <span className="basis-1/6">예약일</span>
        </li>
        {filteredList?.length !== 0 ? (
          filteredList
            ?.slice(offset, offset + limit)
            .map((reservation, index) => (
              <ReservationCard
                key={reservation.id}
                reservation={reservation}
                offset={offset}
                length={filteredList?.length}
                no={index}
              />
            ))
        ) : (
          <li className="text-lg py-5">예약 내역이 없습니다.</li>
        )}
      </ul>
      <Pagination
        page={page}
        total={filteredList?.length}
        limit={limit}
        setPage={setPage}
      />
    </article>
  );
}
