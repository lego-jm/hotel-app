import React, { useState } from "react";
import Button from "../ui/Button";
import CustomCalendar from "../CustomCalendar";
import PlusMinusButton from "./PlusMinusButton";
import { useReservation } from "../../hooks/useReservation";
import { useUsers } from "../../hooks/useUsers";
import { useNavigate } from "react-router-dom";

import confirm from "../Confirm";

export default function ReservationOption({ room }) {
  const [diffDay, setDiffDay] = useState(0);
  const [people, setPeople] = useState(1);
  const [request, setRequest] = useState("");
  const [reservationDate, setReservationDate] = useState();
  const { addReservationQuery } = useReservation();
  const {
    getUserInfoQuery: { data: userInfo },
  } = useUsers();
  const navigate = useNavigate();
  const TIP_PRICE = 60900;
  const roomPrice = room.price * diffDay;
  const totalPrice = roomPrice + TIP_PRICE;

  const handleClick = () => {
    if (!reservationDate?.startDate || !reservationDate?.endDate) {
      window.alert("날짜를 선택해주세요.");
      return;
    }
    confirm("예약을 진행하시겠습니까?", () =>
      addReservationQuery.mutate(
        {
          userInfo,
          roomId: room.id,
          roomTitle: room.title,
          request,
          people,
          reservationDate,
          totalPrice,
          diffDay,
        },
        {
          onSuccess: () => {
            window.alert("예약이 완료되었습니다.");
            navigate("/rooms");
          },
        }
      )
    );
  };

  return (
    <section className="mb-14">
      <h3 className="md:text-2xl text-xl mb-7">예약 옵션</h3>
      <div className="flex flex-col border border-gray-500">
        <CustomCalendar
          setDiffDay={setDiffDay}
          setReservationDate={setReservationDate}
          reservationDate={reservationDate}
          roomId={room.id}
        />
        <div className="sm:p-3 md:p-14 xl:flex-row flex flex-col gap-14 p-0">
          <div className="sm:p-0 xl:order-none flex flex-col gap-10 basis-1/2 order-1 p-3">
            <h3 className="md:text-2xl text-xl border-b gray-300">객실</h3>
            <PlusMinusButton people={people} setPeople={setPeople} />
            <p className="md:text-sm text-xs">
              최대 3인까지 숙박이 가능합니다.
            </p>
            <div className="border-t border-gray-300">
              <h3 className="md:text-2xl text-xl mt-7 mb-2">추가요청</h3>
              <p className="md:text-sm text-xs mb-3">
                보조 침대가 필요하신 경우, 추가 요청에 입력해 주시기 바랍니다.
                <br />
                요청하신 내용은 호텔 사정에 따라 반영되지 않을 수 있으며,
                <br />
                보조침대는 별도 요금이 발생합니다. (1박당 추가요금 60,500원)
              </p>
              <textarea
                className="md:text-base text-sm resize-none border border-gray-400 outline-none p-3 w-full"
                name="request"
                value={request || ""}
                rows="6"
                placeholder="예시) 추가 배드를 요청합니다."
                onChange={(e) => setRequest(e.target.value)}
              ></textarea>
            </div>
            <Button
              text="예약하기"
              type="button"
              custom="block w-5/12 mx-auto"
              event={handleClick}
            />
          </div>
          <div className="sm:p-7 basis-1/2 flex justify-center items-center pt-3">
            <div className="md:text-base text-sm bg-gray-100 bg-opacity-80 h-full w-full p-10">
              <div className="flex flex-col gap-5 mb-5 border-b border-gray-300 py-5">
                {diffDay !== 0 && <p>{`${diffDay}박 ${diffDay + 1}일`}</p>}
                <h3>객실 요금</h3>
                <p>{`* ${
                  roomPrice
                    ? roomPrice.toLocaleString()
                    : room.price.toLocaleString()
                } 원`}</p>
                <h3>세금 및 봉사료</h3>
                <p>{`* ${TIP_PRICE.toLocaleString()} 원`}</p>
              </div>
              <h3>숙박 총 요금</h3>
              <p>{`* ${
                roomPrice
                  ? totalPrice.toLocaleString()
                  : (room.price + TIP_PRICE).toLocaleString()
              } 원`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
