import React, { useState } from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminButton from "../../components/admin/ui/AdminButton";
import AdminRoomCard from "../../components/admin/room/AdminRoomCard";
import { useRooms } from "../../hooks/useRooms";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import AdminListWrapper from "../../components/admin/AdminListWrapper";
import { useNavigate } from "react-router-dom";

export default function AdminRooms() {
  const navigate = useNavigate();
  const {
    getRoomsQuery: { isLoading, data: rooms },
  } = useRooms();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  /* const sortRooms = rooms.sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
  ); */

  if (isLoading) return <Loading />;

  return (
    <AdminPannel>
      <section className="w-full p-20">
        <AdminListWrapper>
          <li className="flex justify-between text-center border-b border-gray-300">
            <span className="basis-1/6">no.</span>
            <span className="basis-3/6">객실명</span>
            <span className="basis-1/6">투숙인원</span>
            <span className="basis-1/6"></span>
          </li>
          {!rooms && <li className="mx-auto p-3">객실을 추가해주세요</li>}
          {rooms &&
            rooms
              .slice(offset, offset + limit)
              .map((room, index) => (
                <AdminRoomCard
                  key={room.id}
                  room={room}
                  offset={offset}
                  no={index}
                  length={rooms.length}
                  setLimit={setLimit}
                />
              ))}
        </AdminListWrapper>

        {rooms && (
          <Pagination
            limit={limit}
            page={page}
            total={rooms.length}
            setPage={setPage}
          />
        )}
        <div className="flex justify-end gap-10 mt-3">
          <AdminButton
            text="객실 추가"
            event={() => navigate("/admin/rooms/add")}
          />
        </div>
      </section>
    </AdminPannel>
  );
}
