import React from "react";

export default function RoomDescriptionCard({ title, data }) {
  return (
    <div className="md:gap-x-3 md:text-base sm:flex-row w-full flex flex-col text-sm gap-2">
      <span className="basis-3/12 font-bold whitespace-nowrap">{title}</span>
      <span className="basis-7/12 break-keep">{data}</span>
    </div>
  );
}
