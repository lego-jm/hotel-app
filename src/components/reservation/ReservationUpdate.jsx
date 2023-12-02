import React from "react";
import { useNavigate } from "react-router-dom";
import { useReservation } from "../../hooks/useReservation";
import Button from "../ui/Button";
import Wrapper from "../Wrapper";

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
    <Wrapper>
      <section className="md:text-base md:m-0 mx-3 text-xs flex flex-col gap-y-3 items-center justify-center">
        <div className="md:p-10 p-5 flex flex-col gap-5 border border-theme-color rounded-lg max-w-2xl w-full">
          <div className="flex gap-2">
            <span className="basis-4/12">예약자 이메일:</span>
            <p className="">{userInfo?.email}</p>
          </div>

          <div className="flex gap-2">
            <span className="basis-4/12">영문 이름:</span>
            <p className="">
              {userInfo?.enNameFt} {userInfo?.enNameLt}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="basis-4/12">연락처:</span>
            <p className="">{userInfo?.phoneNumber || ""}</p>
          </div>
          <div className="flex gap-2">
            <span className="basis-4/12">객실 이름:</span>
            <p className="">{reservation?.roomTitle || ""}</p>
          </div>
          <div className="flex gap-2">
            <span className="basis-4/12">숙박 기간:</span>
            <p className="">
              {`${reservation.reservationDate.startDate} ~ `}
              {reservation.reservationDate.endDate}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="basis-4/12">숙박 인원:</span>
            <p className="">{`${reservation.people}명`}</p>
          </div>

          <div className="flex gap-2">
            <span className="basis-4/12">추가 요청 사항:</span>
            <p className="">{reservation.request}</p>
          </div>

          <div className="flex gap-2">
            <span className="basis-4/12">예약 상태</span>
            <p>
              {reservation.status === "ing" && "예약진행중"}
              {reservation.status === "confirm" && "예약확정"}
              {reservation.status === "cancle" && "예약취소"}
            </p>
          </div>

          <p className="mx-auto text-theme-color">
            * 예약 확정 시 예약 취소가 불가능합니다.
          </p>
        </div>
        <div className="md:flex-row flex flex-col justify-center gap-3 w-full">
          <Button
            type="button"
            text="뒤로가기"
            event={() => window.history.back()}
          />
          {reservation?.status !== "confirm" && (
            <Button
              type="button"
              text="예약 취소"
              event={handleRemoveReservation}
            />
          )}
        </div>
      </section>
    </Wrapper>
  );
}
