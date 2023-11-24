import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Loading from "../Loading";
import { useRooms } from "../../hooks/useRooms";

export default function RoomList({ filter }) {
  const [filterRooms, setFilterRooms] = useState();
  const {
    getRoomsQuery: { isLoading, error, data: rooms },
  } = useRooms();

  useEffect(() => {
    if (filter !== "전체") {
      setFilterRooms(rooms && rooms.filter((room) => room.roomtype === filter));
    } else {
      setFilterRooms(rooms);
    }
  }, [filter]);

  if (isLoading) return <Loading />;

  return (
    <section className="max-w-7xl mx-auto mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10 px-3">
      {filterRooms
        ? filterRooms.map((room) => <RoomCard key={room.id} room={room} />)
        : rooms.map((room) => <RoomCard key={room.id} room={room} />)}
    </section>
  );
}
