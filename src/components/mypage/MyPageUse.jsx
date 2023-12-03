import React from "react";
import { useReservation } from "../../hooks/useReservation";
import moment from "moment";

export default function MyPageUse() {
  const {
    getReservationUserQuery: { data: reservation },
  } = useReservation();
  const nowYear = moment().format("YYYY");

  const totalDay = reservation?.reduce(
    (prev, current) => parseInt(prev) + parseInt(current.diffDay),
    0
  );

  return (
    <div className="basis-1/2">
      <h3 className="md:text-2xl text-xl mb-3">{nowYear}년 이용실적</h3>
      <div className="border-y border-gray-400 py-10">
        <h3 className="md:text-lg text-base">투숙일수</h3>
        <p className="md:text-2xl text-xl mt-3">
          <span className="text-theme-color">{totalDay || 0}</span> 박
        </p>
      </div>
    </div>
  );
}
