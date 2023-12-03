import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
import moment from "moment";
import { useReservation } from "../hooks/useReservation";

export default function CustomCalendar({
  setDiffDay,
  setReservationDate,
  reservationDate,
  roomId,
}) {
  const nowDate = new Date();
  const [disabledDay, setDisabledDay] = useState([]);
  const {
    getRoomReservationQuery: { data: roomReservations },
  } = useReservation(roomId);

  useEffect(() => {
    roomReservations?.map((roomReservertion) => {
      const { reservationDate } = roomReservertion;
      const diffDayArr = Array.from(
        { length: roomReservertion.diffDay + 1 },
        (_, i) => i
      );

      return diffDayArr?.map((diff) =>
        setDisabledDay((prev) => [
          ...prev,
          moment(reservationDate.startDate)
            .add(diff, "days")
            .format("YYYY-MM-DD"),
        ])
      );
    });
  }, [roomReservations]);

  useEffect(() => {
    reservationDate &&
      setDiffDay(
        getDiffDate(reservationDate.startDate, reservationDate.endDate)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reservationDate]);

  return (
    <div className="sm:p-14 p-3 pb-0">
      <h3 className="md:text-2xl text-xl border-b gray-300 mb-5">숙박 일자</h3>
      <div className="flex flex-col justify-center items-center gap-5">
        <Calendar
          selectRange
          tileDisabled={({ _, date }) =>
            disabledDay.find(
              (diffDate) => diffDate === moment(date).format("YYYY-MM-DD")
            )
          }
          calendarType="gregory"
          formatDay={(_, date) => moment(date).format("D")}
          onChange={(value) => {
            setReservationDate({
              ...reservationDate,
              startDate: moment(value[0]).format("YYYY-MM-DD"),
              endDate: moment(value[1]).format("YYYY-MM-DD"),
            });
          }}
          minDate={nowDate}
          /* tileContent={({ date }) => {
            if (
              diffDay.find(
                (diffDate) => diffDate === moment(date).format("YYYY-MM-DD")
              )
            ) {
              return (
                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
              );
            } else {
              return (
                <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
              );
            }
          }} */
        />
        <div className="relative md:text-base text-sm before:absolute before:top-2 before:-left-3 before:w-1.5 before:h-1.5 before:bg-rose-400 before:rounded-full">
          예약불가
        </div>
      </div>
      {reservationDate && (
        <p className="mt-5 text-center">
          {reservationDate.startDate} ~ {reservationDate.endDate}
        </p>
      )}
    </div>
  );
}

function getDiffDate(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);

  return end.diff(start, "days");
}
