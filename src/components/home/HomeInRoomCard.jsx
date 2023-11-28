import React from "react";

export default function HomeInRoomCard({ text, img }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        <img
          className="transition-all hover:scale-105 duration-500"
          src={img}
          alt="room-img"
        />
      </div>
      <h3 className="h-32 flex justify-center items-center bg-theme-color text-white text-xl">
        {text}
      </h3>
    </div>
  );
}
