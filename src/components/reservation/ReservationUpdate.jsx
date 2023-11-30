import React from "react";
import { useNavigate } from "react-router-dom";
import { useReservation } from "../../hooks/useReservation";
import AdminButton from "../admin/ui/AdminButton";

export default function ReservationUpdate({ reservation }) {
  const navigate = useNavigate();
  const { removeReservationQuery } = useReservation();
  const { userInfo } = reservation;

  const handleRemoveReservation = () => {
    if (window.confirm("예약을 취소 하시겠습니까?")) {
      removeReservationQuery.mutate(reservation.id, {
        onSuccess: () => navigate("/admin/reservation"),
      });
    }
  };

  return (
    <>
      <section className="w-6/12 flex flex-col gap-7 border border-theme-color rounded-lg p-10 mx-auto">
        <div className="flex items-center gap-3">
          <label className="basis-3/12" htmlFor="email">
            예약자 이메일
          </label>
          <p className="p-2 px-3">{userInfo?.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <label className="basis-3/12" htmlFor="enNameFt">
            영문 이름
          </label>
          <div className="flex gap-2 w-8/12">
            <p className="p-2 px-3">
              {userInfo?.enNameFt} {userInfo?.enNameLt}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className="basis-3/12" htmlFor="phoneNumber">
            연락처
          </label>
          <p className="p-2 px-3">{userInfo?.phoneNumber || ""}</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="basis-3/12" htmlFor="roomTitle">
            객실 이름
          </label>
          <p className="p-2 px-3">{reservation?.roomTitle || ""}</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="basis-3/12" htmlFor="phoneNumber">
            숙박 기간
          </label>
          <p className="p-2 px-3">
            {`${reservation.reservationDate.startDate} ~ `}
            {reservation.reservationDate.endDate}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="basis-3/12" htmlFor="phoneNumber">
            숙박 인원
          </label>
          <p className="p-2 px-3">{`${reservation.people}명`}</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="basis-3/12" htmlFor="phoneNumber">
            추가 요청 사항
          </label>
          <p className="p-2 px-3">{reservation.request}</p>
        </div>
        <div className="flex items-center gap-6">
          <label className="basis-3/12" htmlFor="status">
            예약 상태
          </label>
          <p>
            {reservation.status === "ing" && "예약진행중"}
            {reservation.status === "confirm" && "예약확정"}
            {reservation.status === "cancle" && "예약취소"}
          </p>
        </div>
        <p className="mx-auto text-theme-color">
          * 예약 확정 시 예약 취소가 불가능합니다.
        </p>
      </section>
      <div className="mt-3 w-6/12 mx-auto flex gap-3">
        <AdminButton
          type="button"
          text="뒤로가기"
          event={() => window.history.back()}
        />
        {reservation?.status !== "confirm" && (
          <AdminButton
            type="button"
            text="예약 취소"
            event={handleRemoveReservation}
          />
        )}
      </div>
    </>
  );
}
