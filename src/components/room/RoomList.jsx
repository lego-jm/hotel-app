import React from "react";
import RoomCard from "./RoomCard";
import { useRooms } from "../../hooks/useRooms";
import Loading from "../Loading";

export default function RoomList() {
  const {
    getRoomsQuery: { isLoading, error, data: rooms },
  } = useRooms();

  if (isLoading) return <Loading />;

  return (
    <section className="max-w-7xl mx-auto mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {rooms && rooms.map((room) => <RoomCard key={room.id} room={room} />)}
    </section>
  );
}
