import React from "react";
import Wrapper from "../components/Wrapper";
import { useLocation } from "react-router-dom";
import ReservationUpdate from "../components/reservation/ReservationUpdate";

export default function ReservationDetail() {
  const { state } = useLocation();

  return (
    <Wrapper>
      <h3 className="text-3xl text-center mb-6">예약 상세</h3>
      <ReservationUpdate reservation={state} />
    </Wrapper>
  );
}
