import React from "react";

export default function ReservationDescription({ room }) {
  return (
    <>
      <section className="border-t border-gray-300 py-14">
        <h3 className="md:text-2xl text-xl mb-7">요금 정책</h3>
        <p className="md:text-base text-sm text-gray-500">
          부가세10%와 봉사료10%(21%)가 부과됩니다.
        </p>
      </section>
      <section className="border-t border-gray-300 py-14">
        <h3 className="md:text-2xl text-xl mb-7">취소 규정</h3>
        <p className="md:text-base text-sm text-gray-500">
          예약 취소 및 변경은 체크인 하루 전 18:00(한국시간)까지 가능합니다.
          예약하신 일자에 체크인 되지 않거나 또는 위의 지정 시간 이후에 예약을
          취소했을 경우에는 예약 사항에 대해 노-쇼 (No Show) 처리 되며, 이에
          따른 위약금으로 예약 첫날에 해당하는 1박 객실요금이 청구되오니
          유의하시기 바랍니다.
        </p>
      </section>
      <section className="border-t border-gray-300 py-14">
        <h3 className="md:text-2xl text-xl mb-7">객실 정보</h3>
        <ul className="md:text-base text-sm text-gray-500">
          <li className=" flex flex-wrap gap-x-72 mb-3">
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
        <h3 className="md:text-2xl text-xl mb-7">어메니티</h3>
        <ul className="md:text-base text-sm text-gray-500">
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
    </>
  );
}
