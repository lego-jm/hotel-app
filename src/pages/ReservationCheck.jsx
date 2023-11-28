import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import ReservationFilter from "../components/reservation/ReservationFilter";
import ReservationList from "../components/reservation/ReservationList";

export default function ReservationCheck() {
  const [reservationDate, setReservationDate] = useState();
  return (
    <Wrapper>
      <section className="p-11">
        <h3 className="text-2xl text-center">예약조회</h3>
        <ReservationFilter setReservationDate={setReservationDate} />
        <ReservationList reservationDate={reservationDate} />
      </section>
    </Wrapper>
  );
}
