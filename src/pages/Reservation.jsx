import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PlusMinusButton from "../components/reservation/PlusMinusButton";
import Button from "../components/ui/Button";

import Calendar from "react-calendar";
import moment from "moment";
import "../Calendar.css";

export default function Reservation() {
  const TIP_PRICE = 60900;
  const {
    state: { room },
  } = useLocation();
  const [people, setPeople] = useState(1);
  const [request, setRequest] = useState("");
  const [reservationDate, setReservationDate] = useState();
  const [diffDay, setDiffDay] = useState(0);
  const totalPrice = room.price * diffDay;

  console.log(totalPrice);
  const nowDate = new Date();

  useEffect(() => {
    setDiffDay(
      getDiffDate(reservationDate?.startDate, reservationDate?.endDate)
    );
  }, [reservationDate]);

  return (
    <section className="max-w-7xl pb-14 mx-auto my-28">
      <section className="border-b border-gray-300 mb-5 pb-5">
        <h3 className="text-lg text-gray-500 mb-3">리얼호텔</h3>
        <h3 className="text-2xl">{room.title}</h3>
      </section>
      <section className="mb-14">
        <h3 className="text-2xl mb-7">예약 옵션</h3>
        <div className="flex flex-col border border-gray-500">
          <div className="p-14 pb-0">
            <h3 className="text-2xl border-b gray-300 mb-5">숙박 일자</h3>
            <div className="flex justify-center gap-5">
              <Calendar
                formatDay={(_, date) => moment(date).format("D")}
                onChange={(value) =>
                  setReservationDate({
                    ...reservationDate,
                    startDate: moment(value).format("YYYY-MM-DD"),
                  })
                }
                minDate={nowDate}
              />
              <Calendar
                formatDay={(_, date) => moment(date).format("D")}
                onChange={(value) =>
                  setReservationDate({
                    ...reservationDate,
                    endDate: moment(value).format("YYYY-MM-DD"),
                  })
                }
                minDate={nowDate}
              />
            </div>
            {reservationDate && (
              <p className="mt-5 text-center">
                {reservationDate.startDate} ~ {reservationDate.endDate}
              </p>
            )}
          </div>
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
                  value={request.request || ""}
                  cols="50"
                  rows="6"
                  onChange={(e) =>
                    setRequest({ [e.target.name]: e.target.value })
                  }
                ></textarea>
              </div>
              <Button
                text="예약하기"
                type="button"
                custom="block w-5/12 mx-auto"
              />
            </div>
            <div className="basis-1/2 flex justify-center items-center p-7">
              <div className="bg-gray-100 bg-opacity-80 h-full w-full p-10">
                <div className="flex flex-col gap-5 mb-5 border-b border-gray-300 py-5">
                  {diffDay && <p>{`${diffDay}박 ${diffDay + 1}일`}</p>}
                  <h3>객실 요금</h3>
                  <p>{`* ${totalPrice.toLocaleString()} 원`}</p>
                  <h3>세금 및 봉사료</h3>
                  <p>{`* ${TIP_PRICE.toLocaleString()} 원`}</p>
                </div>
                <h3>숙박 총 요금</h3>
                <p>{`* ${(totalPrice + TIP_PRICE).toLocaleString()} 원`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-300 py-14">
        <h3 className="text-2xl mb-7">요금 정책</h3>
        <p className="text-gray-500">
          부가세10%와 봉사료10%(21%)가 부과됩니다.
        </p>
      </section>
      <section className="border-t border-gray-300 py-14">
        <h3 className="text-2xl mb-7">취소 규정</h3>
        <p className="text-gray-500">
          예약 취소 및 변경은 체크인 하루 전 18:00(한국시간)까지 가능합니다.
          예약하신 일자에 체크인 되지 않거나 또는 위의 지정 시간 이후에 예약을
          취소했을 경우에는 예약 사항에 대해 노-쇼 (No Show) 처리 되며, 이에
          따른 위약금으로 예약 첫날에 해당하는 1박 객실요금이 청구되오니
          유의하시기 바랍니다.
        </p>
      </section>
      <section className="border-t border-gray-300 py-14">
        <h3 className="text-2xl mb-7">객실 정보</h3>
        <ul className="text-gray-500">
          <li className="flex gap-72 mb-3">
            <p>
              <span className="font-bold mr-7">투숙인원</span>
              {room.people}명
            </p>
            <p>
              <span className="font-bold mr-7">전망</span>
              {room.outlook}
            </p>
            <p>
              <span className="font-bold mr-7">객실면적</span>
              {room.area}
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold mr-7">체크인/체크아웃</span>
              15:00/12:00
            </p>
          </li>
        </ul>
      </section>
      <section className="border-t border-gray-300 py-14">
        <h3 className="text-2xl mb-7">어메니티</h3>

        <ul className="text-gray-500">
          <li>
            <span className="font-bold mr-3">일반</span> 손전등 / 슬리퍼 /
            전화기 / 티포트 / 금고 / 구둣주걱 / 구두클리너 / 미니바 / 55” UHD TV
          </li>
          <li>
            <span className="font-bold mr-3">욕실</span> 목욕 가운 / 비데 /
            헤어드라이어 / 욕실용품
          </li>
          <li>
            <span className="font-bold mr-3">기타</span> 무료 생수 1일 2병 /
            보이스 메일 서비스 / 커피 및 티 메이커
          </li>
        </ul>
      </section>
    </section>
  );
}

function getDiffDate(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);

  return end.diff(start, "days");
}
