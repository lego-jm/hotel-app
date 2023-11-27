import React from "react";
import { useLocation } from "react-router-dom";
import ReservationDescription from "../components/reservation/ReservationDescription";
import ReservationOption from "../components/reservation/ReservationOption";

export default function Reservation() {
  const {
    state: { room },
  } = useLocation();

  return (
    <section className="max-w-7xl pb-14 mx-auto my-28">
      <section className="border-b border-gray-300 mb-5 pb-5">
        <h3 className="text-lg text-gray-500 mb-3">리얼호텔</h3>
        <h3 className="text-2xl">{room.title}</h3>
      </section>
      <ReservationOption room={room} />
      <ReservationDescription room={room} />
    </section>
  );
}
