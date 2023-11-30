import React, { useState } from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminListWrapper from "../../components/admin/AdminListWrapper";
import Pagination from "../../components/Pagination";
import { useReservation } from "../../hooks/useReservation";
import AdminReservationCard from "../../components/admin/reservation/AdminReservationCard";
import Loading from "../../components/Loading";

export default function AdminReservation() {
  const {
    getAllReservationQuery: { isLoading, error, data: reservations },
  } = useReservation();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  // console.log(reservations);

  if (isLoading) return <Loading />;

  return (
    <AdminPannel>
      <section className="w-full p-20">
        <AdminListWrapper>
          <li className="flex justify-between text-center border-b border-gray-300">
            <span className="basis-1/6">no.</span>
            <span className="basis-2/6">숙박기간</span>
            <span className="basis-1/6">예약자이름</span>
            <span className="basis-1/6">예약 상태</span>
            <span className="basis-1/6">예약일</span>
            <span className="basis-1/6"></span>
          </li>
          {!reservations && (
            <li className="mx-auto p-3">예약 내역이 없습니다.</li>
          )}
          {reservations &&
            reservations
              .slice(offset, offset + limit)
              .map((reservation, index) => (
                <AdminReservationCard
                  key={reservation.id}
                  reservation={reservation}
                  offset={offset}
                  no={index}
                  length={reservations.length}
                />
              ))}
        </AdminListWrapper>
        {reservations && (
          <Pagination
            limit={limit}
            page={page}
            total={reservations.length}
            setPage={setPage}
          />
        )}
      </section>
    </AdminPannel>
  );
}
