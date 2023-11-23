import React from "react";

export default function RoomDescriptionCard({ title, data }) {
  return (
    <div className="w-1/3 flex">
      <span className="w-5/12 font-bold">{title}</span>
      <span>{data}</span>
    </div>
  );
}
