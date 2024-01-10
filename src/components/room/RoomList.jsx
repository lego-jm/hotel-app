import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Loading from "../Loading";
import { useRooms } from "../../hooks/useRooms";

export default function RoomList({ filter }) {
  const [filterRooms, setFilterRooms] = useState();
  const {
    getRoomsQuery: { isLoading, data: rooms },
  } = useRooms();

  useEffect(() => {
    if (filter !== "전체") {
      rooms && setFilterRooms(rooms.filter((room) => room.roomType === filter));
    } else {
      rooms && setFilterRooms(rooms);
    }
    // eslint-disable-next-line
  }, [filter]);

  if (isLoading) return <Loading />;

  return (
    <section className="max-w-7xl mx-auto mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10 px-3">
      {filterRooms
        ? filterRooms.map((room) => <RoomCard key={room.no} room={room} />)
        : rooms.map((room) => <RoomCard key={room.no} room={room} />)}
    </section>
  );
}
