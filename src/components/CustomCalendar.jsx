import React, { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calendar.css";
import moment from "moment";

export default function CustomCalendar({
  setDiffDay,
  setReservationDate,
  reservationDate,
}) {
  const nowDate = new Date();
  /* const minDate = new Date(nowDate);
  const minEndDate = new Date(reservationDate?.startDate);
  minDate.setDate(nowDate.getDate() + 1);
  minEndDate.setDate(minEndDate.getDate() + 1); */

  useEffect(() => {
    setDiffDay(
      getDiffDate(reservationDate?.startDate, reservationDate?.endDate)
    );
  }, [reservationDate]);

  return (
    <div className="p-14 pb-0">
      <h3 className="text-2xl border-b gray-300 mb-5">숙박 일자</h3>
      <div className="flex justify-center gap-5">
        <Calendar
          selectRange
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
        />
        {/* <Calendar
          calendarType="gregory"
          formatDay={(_, date) => moment(date).format("D")}
          onChange={(value) =>
            setReservationDate({
              ...reservationDate,
              endDate: moment(value).format("YYYY-MM-DD"),
            })
          }
          minDate={(reservationDate?.startDate && minEndDate) || minDate}
        /> */}
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
