import React from "react";
import { useLocation } from "react-router-dom";
import RoomDetailSwipe from "../components/room/RoomDetailSwipe";
import RoomDescription from "../components/room/RoomDescription";

export default function RoomDetail() {
  const {
    state: {
      room,
      room: { title, roomtype, imgUrl, location },
    },
  } = useLocation();

  return (
    <section>
      <section>
        <div className="flex flex-col items-center p-10">
          <p>
            <span className="after:border-r after:border-gray-500 after:mx-4 font-bold">
              {location}
            </span>
            {roomtype}
          </p>
          <h5 className="text-4xl mt-5">{title}</h5>
        </div>
        <RoomDetailSwipe imgUrl={imgUrl} />
      </section>
      <RoomDescription room={room} />
    </section>
  );
}
