import React from "react";

export default function RoomDescriptionCard({ title, data }) {
  return (
    <div className="w-full flex text-sm gap-3">
      <span className="basis-4/12 font-bold">{title}</span>
      <span className="basis-7/12">{data}</span>
    </div>
  );
}
