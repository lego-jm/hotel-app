import React, { useState } from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminListWrapper from "../../components/admin/AdminListWrapper";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import AdminUserCard from "../../components/admin/user/AdminUserCard";

export default function AdminUsers() {
  const navigate = useNavigate();
  const {
    getUsersQuery: { isLoading, error, data: users },
  } = useUsers();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  if (isLoading) return <Loading />;

  return (
    <AdminPannel>
      <section className="w-full p-20">
        <AdminListWrapper>
          <li className="flex justify-between text-center border-b border-gray-300">
            <span className="basis-1/6">no.</span>
            <span className="basis-2/6">이메일</span>
            <span className="basis-1/6">회원이름</span>
            <span className="basis-1/6">가입일</span>
            <span className="basis-1/6"></span>
          </li>
          {!users && <li className="mx-auto p-3">가입한 회원이 없습니다.</li>}
          {users &&
            users
              .slice(offset, offset + limit)
              .map((user, index) => (
                <AdminUserCard
                  key={users.id}
                  content={user}
                  offset={offset}
                  no={index}
                  length={users.length}
                />
              ))}
        </AdminListWrapper>
        {users && (
          <Pagination
            limit={limit}
            page={page}
            total={users.length}
            setPage={setPage}
          />
        )}
      </section>
    </AdminPannel>
  );
}
