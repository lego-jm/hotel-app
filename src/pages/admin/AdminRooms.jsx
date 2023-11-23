import React, { useState } from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminButton from "../../components/admin/AdminButton";
import { useNavigate } from "react-router-dom";
import AdminRoomCard from "../../components/admin/AdminRoomCard";
import { useRooms } from "../../hooks/useRooms";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

export default function AdminRooms() {
  const navigate = useNavigate();
  const {
    getRoomsQuery: { isLoading, error, data: rooms },
  } = useRooms();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  // if (isLoading) return <Loading />;
  const sortRooms = rooms.sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
  );

  return (
    <AdminPannel>
      <section className="w-4/6 p-3 flex flex-col justify-start mx-auto mt-10">
        <ul className="w-full flex flex-col gap-4 shadow-xl rounded-lg border border-theme-color p-4 mb-5">
          <li className="flex justify-between text-center border-b border-gray-300">
            <span className="basis-1/6">no.</span>
            <span className="basis-3/6">객실명</span>
            <span className="basis-1/6">투숙인원</span>
            <span className="basis-1/6"></span>
          </li>
          {!rooms && <li className="mx-auto p-3">객실을 추가해주세요</li>}
          {rooms &&
            sortRooms
              .slice(offset, offset + limit)
              .map((room, index) => (
                <AdminRoomCard
                  key={room.id}
                  room={room}
                  offset={offset}
                  no={index}
                  length={rooms.length}
                />
              ))}
        </ul>

        {rooms && (
          <Pagination
            limit={limit}
            page={page}
            total={rooms.length}
            setPage={setPage}
          />
        )}

        <div className="flex justify-end gap-10 mt-3">
          <AdminButton text="객실 추가" link="/admin/rooms/add" />
          {/* <AdminButton text="객실 삭제" /> */}
        </div>
      </section>
    </AdminPannel>
  );
}
