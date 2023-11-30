import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { CiCalendarDate } from "react-icons/ci";
import Button from "../ui/Button";

export default function ReservationFilter({ setReservationDate }) {
  const [date, setDate] = useState({
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().add(1, "days").format("YYYY-MM-DD"),
  });
  const [toggle, setToggle] = useState({ isStart: false, isEnd: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservationDate(date);
  };

  return (
    <div className="md:mt-16 md:flex-row bg-gray-200 flex flex-col items-center justify-center gap-3 p-5 m-7">
      <h3 className="md:text-base text-sm">예약일자</h3>
      <form
        onSubmit={handleSubmit}
        className="md:text-base text-sm md:flex-row flex flex-col items-center gap-5"
      >
        <div className="relative">
          <input
            className="border border-gray-500 p-2 outline-none cursor-default"
            type="text"
            name="startDate"
            value={date?.startDate || ""}
            readOnly
          />
          <CiCalendarDate
            className="absolute top-1.5 right-3 text-2xl cursor-pointer"
            onClick={() => setToggle((prev) => ({ isStart: !prev.isStart }))}
          />
          {toggle?.isStart && (
            <div className="absolute">
              <Calendar
                calendarType="gregory"
                formatDay={(_, date) => moment(date).format("D")}
                onChange={(value) =>
                  setDate({
                    ...date,
                    startDate: moment(value).format("YYYY-MM-DD"),
                  })
                }
              />
            </div>
          )}
        </div>
        <p className="md:block hidden"> ~ </p>
        <div className="relative">
          <input
            className="border border-gray-500 p-2 outline-none cursor-default"
            type="text"
            name="endDate"
            value={date?.endDate || ""}
            readOnly
          />
          <CiCalendarDate
            className="absolute top-1.5 right-3 text-2xl cursor-pointer"
            onClick={() => setToggle((prev) => ({ isEnd: !prev.isEnd }))}
          />
          {toggle?.isEnd && (
            <div className="absolute">
              <Calendar
                calendarType="gregory"
                formatDay={(_, date) => moment(date).format("D")}
                onChange={(value) =>
                  setDate({
                    ...date,
                    endDate: moment(value).format("YYYY-MM-DD"),
                  })
                }
              />
            </div>
          )}
        </div>
        <Button text="조회" type="submit" />
      </form>
    </div>
  );
}
