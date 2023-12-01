import React from "react";
import { useLocation } from "react-router-dom";
import ReservationDescription from "../components/reservation/ReservationDescription";
import ReservationOption from "../components/reservation/ReservationOption";
import Wrapper from "../components/Wrapper";

export default function Reservation() {
  const {
    state: { room },
  } = useLocation();

  return (
    <Wrapper custom="xl:p-0 px-5">
      <section className="border-b border-gray-300 mb-5 pb-5">
        <h3 className="md:text-lg text-base text-gray-500 mb-3">리얼호텔</h3>
        <h3 className="md:text-2xl text-xl">{room.title}</h3>
      </section>
      <ReservationOption room={room} />
      <ReservationDescription room={room} />
    </Wrapper>
  );
}
