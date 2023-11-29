import React, { useState } from "react";
import AdminPannel from "../../components/admin/AdminPannel";
import AdminListWrapper from "../../components/admin/AdminListWrapper";
import Pagination from "../../components/Pagination";
import { useAttraction } from "../../hooks/useAttraction";
import AdminAttactionCard from "../../components/admin/attraction/AdminAttractionCard";
import AdminButton from "../../components/admin/ui/AdminButton";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

export default function AdminAttraction() {
  const navigate = useNavigate();
  const {
    getAttractionQuery: { isLoading, error, data: attractions },
  } = useAttraction();
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
            <span className="basis-1/6">명소종류</span>
            <span className="basis-1/6">명소이름</span>
            <span className="basis-2/6">등록날짜</span>
            <span className="basis-1/6"></span>
          </li>
          {!attractions && (
            <li className="mx-auto p-3">등록된 컨텐츠가 없습니다.</li>
          )}
          {attractions &&
            attractions
              .slice(offset, offset + limit)
              .map((attraction, index) => (
                <AdminAttactionCard
                  key={attractions.id}
                  attraction={attraction}
                  offset={offset}
                  no={index}
                  length={attractions.length}
                />
              ))}
        </AdminListWrapper>
        {attractions && (
          <Pagination
            limit={limit}
            page={page}
            total={attractions.length}
            setPage={setPage}
          />
        )}
        <div className="flex justify-end gap-10 mt-3">
          <AdminButton
            text="명소 추가"
            event={() => navigate("/admin/attraction/add")}
          />
        </div>
      </section>
    </AdminPannel>
  );
}
