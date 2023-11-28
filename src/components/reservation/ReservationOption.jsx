import React, { useState } from "react";
import Button from "../ui/Button";
import CustomCalendar from "../CustomCalendar";
import PlusMinusButton from "./PlusMinusButton";
import { useReservation } from "../../hooks/useReservation";
import { useNavigate } from "react-router-dom";

export default function ReservationOption({ room }) {
  const [diffDay, setDiffDay] = useState(0);
  const [people, setPeople] = useState(1);
  const [request, setRequest] = useState("");
  const [reservationDate, setReservationDate] = useState();
  const { setReservationQuery } = useReservation();
  const navigate = useNavigate();
  const TIP_PRICE = 60900;
  const roomPrice = room.price * diffDay;
  const totalPrice = roomPrice + TIP_PRICE;

  return (
    <section className="mb-14">
      <h3 className="text-2xl mb-7">예약 옵션</h3>
      <div className="flex flex-col border border-gray-500">
        <CustomCalendar
          setDiffDay={setDiffDay}
          setReservationDate={setReservationDate}
          reservationDate={reservationDate}
        />
        <div className="flex gap-14 p-14">
          <div className="flex flex-col gap-10 basis-1/2">
            <h3 className="text-2xl border-b gray-300">객실</h3>
            <PlusMinusButton people={people} setPeople={setPeople} />
            <p className="text-sm">최대 3인까지 숙박이 가능합니다.</p>
            <div className="border-t border-gray-300">
              <h3 className="text-2xl mt-7 mb-2">추가요청</h3>
              <p className="text-sm mb-3">
                보조 침대가 필요하신 경우, 추가 요청에 입력해 주시기 바랍니다.
                <br />
                요청하신 내용은 호텔 사정에 따라 반영되지 않을 수 있으며,
                <br />
                보조침대는 별도 요금이 발생합니다. (1박당 추가요금 60,500원)
              </p>
              <textarea
                className="resize-none border border-gray-400 outline-none p-3"
                name="request"
                value={request || ""}
                cols="50"
                rows="6"
                placeholder="예시) 추가 배드를 요청합니다."
                onChange={(e) => setRequest(e.target.value)}
              ></textarea>
            </div>
            <Button
              text="예약하기"
              type="button"
              custom="block w-5/12 mx-auto"
              event={() =>
                setReservationQuery.mutate(
                  {
                    data: {
                      roomId: room.id,
                      roomTitle: room.title,
                      request,
                      people,
                      reservationDate,
                      totalPrice,
                      diffDay,
                    },
                  },
                  {
                    onSuccess: () => {
                      window.alert("예약이 완료되었습니다.");
                      navigate("/rooms");
                    },
                  }
                )
              }
            />
          </div>
          <div className="basis-1/2 flex justify-center items-center p-7">
            <div className="bg-gray-100 bg-opacity-80 h-full w-full p-10">
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
