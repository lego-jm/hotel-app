import React from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminButton from "../../components/admin/AdminButton";
import { useNavigate } from "react-router-dom";
import { getRooms } from "../../api/firebase";
import { useQuery } from "react-query";
import AdminRoomCard from "../../components/admin/AdminRoomCard";

export default function AdminRooms() {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: rooms,
  } = useQuery(["rooms"], () => getRooms());

  console.log(rooms);

  return (
    <AdminPannel>
      <section className="w-4/6 p-3 flex flex-col justify-start mx-auto mt-10">
        <ul className="w-full flex flex-col gap-4 shadow-xl rounded-lg border border-theme-color p-4">
          <li className="flex justify-between text-center border-b border-gray-300">
            <span className="basis-1/6">no.</span>
            <span className="basis-3/6">객실명</span>
            <span className="basis-1/6">투숙인원</span>
            <span className="basis-1/6"></span>
          </li>

          {rooms &&
            rooms.map((room, index) => (
              <AdminRoomCard key={index} room={room} />
            ))}
        </ul>
        <div className="flex justify-end gap-10 mt-3">
          <AdminButton text="객실 추가" link="/admin/rooms/add" />
          {/* <AdminButton text="객실 삭제" /> */}
        </div>
      </section>
    </AdminPannel>
  );
}
