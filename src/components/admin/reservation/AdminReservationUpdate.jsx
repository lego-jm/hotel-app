import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useReservation } from "../../../hooks/useReservation";
import AdminButton from "../ui/AdminButton";

export default function AdminReservationUpdate() {
  const {
    state: { reservation },
  } = useLocation();

  const navigate = useNavigate();
  const [status, setStatus] = useState();
  const { updateReservationQuery } = useReservation();
  const { userInfo } = reservation;

  useEffect(() => {
    reservation && setStatus(reservation.status);
  }, [reservation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("예약 상태 변경 하시겠습니까?")) {
      updateReservationQuery.mutate(
        { ...reservation, status },
        {
          onSuccess: () => navigate("/admin/reservation"),
        }
      );
    }
  };

  return (
    <>
      <h3 className="text-2xl mb-3">예약 상세조회</h3>
      <form
        className="w-full flex flex-col gap-7 border border-theme-color rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-3">
          <label className="w-2/12" htmlFor="email">
            예약자 이름
          </label>
          <p className="w-4/12 p-2 px-3">{userInfo?.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <label className="w-2/12" htmlFor="enNameFt">
            영문 이름
          </label>

          <div className="flex gap-2 w-8/12">
            <p className="w-4/12 p-2 px-3">
              {userInfo?.enNameFt} {userInfo?.enNameLt}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className="w-2/12" htmlFor="phoneNumber">
            연락처
          </label>
          <p className="w-4/12 p-2 px-3">{userInfo?.phoneNumber || ""}</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="w-2/12" htmlFor="roomTitle">
            객실 이름
          </label>
          <p className="w-4/12 p-2 px-3">{reservation?.roomTitle || ""}</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="w-2/12" htmlFor="phoneNumber">
            숙박 기간
          </label>
          <p className="w-4/12 p-2 px-3">
            {`${reservation.reservationDate.startDate} ~ `}
            {reservation.reservationDate.endDate}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="w-2/12" htmlFor="phoneNumber">
            숙박 인원
          </label>
          <p className="w-4/12 p-2 px-3">{`${reservation.people}명`}</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="w-2/12" htmlFor="phoneNumber">
            추가 요청 사항
          </label>
          <p className="w-5/12 p-2 px-3">{reservation.request}</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="w-2/12" htmlFor="status">
            예약 상태
          </label>
          <select
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 p-2"
            name="status"
            id="status"
            value={status}
          >
            <option value="ing">예약진행중</option>
            <option value="confirm">예약확정</option>
            <option value="cancle">예약취소</option>
          </select>
        </div>

        <div className="flex gap-5">
          <AdminButton type="submit" text="예약상태변경" />
        </div>
      </form>
    </>
  );
}
