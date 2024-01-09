import React from "react";
import { useLocation } from "react-router-dom";
import RoomDetailSwipe from "../components/room/RoomDetailSwipe";
import RoomDescription from "../components/room/RoomDescription";

export default function RoomDetail() {
  const {
    state: {
      room,
      room: { title, roomtype, imgUrls, location },
    },
  } = useLocation();

  return (
    <section className="md:my-8">
      <div className="md:text-base text-sm flex flex-col items-center p-10">
        <p>
          <span className="after:border-r after:border-gray-500 after:mx-4 font-bold">
            {location}
          </span>
          {roomtype}
        </p>
        <h5 className="md:text-4xl text-2xl mt-5 text-center">{title}</h5>
      </div>
      <RoomDetailSwipe imgUrl={imgUrls} />
      <RoomDescription room={room} />
    </section>
  );
}
