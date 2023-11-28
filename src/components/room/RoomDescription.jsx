import React from "react";
import RoomDescriptionCard from "./RoomDescriptionCard";
import Wrapper from "../Wrapper";

export default function RoomDescription({
  room: { people, bedtype, area, outlook, location, id, content },
}) {
  return (
    <Wrapper custom="!my-0">
      <p className="text-center text-md font-light opacity-70 p-14">
        {content}
      </p>
      <section className="border-t border-gray-400 flex px-5 py-16">
        <h3 className="basis-3/12 text-3xl">객실개요</h3>
        <div className="flex flex-col gap-5 basis-9/12">
          <div className="flex flex-col gap-6">
            <div className="flex">
              <RoomDescriptionCard title="위치" data={location} />
              <RoomDescriptionCard title="침대타입" data={bedtype} />
              <RoomDescriptionCard title="투숙인원" data={`${people}명`} />
            </div>
            <div className="flex">
              <RoomDescriptionCard title="전망" data={outlook} />
              <RoomDescriptionCard title="객실면적" data={area} />
              <RoomDescriptionCard title="체크인/체크아웃" data="15:00/12:00" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-400 flex px-5 py-16">
        <h3 className="basis-3/12 text-3xl">특별서비스</h3>
        <ul className="flex flex-col gap-3 basis-9/12">
          <li className="relative before:absolute before:w-1 before:h-1 before:bg-gray-500 before:top-2 before:-left-4">
            서울 시내 중심에서 스카이라인을 감상할 수 있는 객실
          </li>
          <li className="relative before:absolute before:w-1 before:h-1 before:bg-gray-500 before:top-2 before:-left-4">
            해온(he:on) 베딩 시스템: 최상의 숙면을 위한 침대 및 침구류
          </li>
          <li className="relative before:absolute before:w-1 before:h-1 before:bg-gray-500 before:top-2 before:-left-4">
            맞춤형 베개 제공
          </li>
          <li className="relative before:absolute before:w-1 before:h-1 before:bg-gray-500 before:top-2 before:-left-4">
            전 객실 초고속 무료 인터넷 (유선, 와이파이)
          </li>
        </ul>
      </section>

      <section className="border-t border-gray-400 flex px-5 py-16">
        <h3 className="basis-3/12 text-3xl">어메니티</h3>
        <div className="basis-9/12 flex justify-between">
          <div className="w-3/12">
            <h3>일반</h3>
            <p>
              손전등 / 슬리퍼 / 전화기 / 티포트 / 금고 / 구둣주걱 / 구두클리너 /
              미니바 / 55” UHD TV
            </p>
          </div>
          <div className="w-3/12">
            <h3>욕실</h3>
            <p>목욕 가운 / 비데 / 헤어드라이어 / 욕실용품</p>
          </div>
          <div className="w-3/12">
            <h3>기타</h3>
            <p>
              케이블/위성 TV 채널
              <br />
              무료 생수 1일 2병 / 보이스 메일 서비스 / 커피 및 티 메이커
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-400 flex px-5 py-16">
        <h3 className="basis-3/12 text-3xl">추가정보</h3>
        <ul className="flex flex-col gap-3 basis-9/12">
          <li className="relative">
            <img
              className="absolute top-0 -left-7"
              src="/images/icon/icon-helpul.png"
              alt=""
            />
            리얼호텔의 모든 시설은 전부 금연이오니, 이용에 착오 없으시기
            바랍니다.
          </li>
          <li className="relative before:absolute before:w-1 before:h-1 before:bg-gray-500 before:top-2 before:-left-4">
            모든 요금에 세금 10% 및 봉사료 10%(합계 21%)가 부과됩니다.
          </li>
          <li className="relative before:absolute before:w-1 before:h-1 before:bg-gray-500 before:top-2 before:-left-4">
            객실 디자인 랜덤 배정
          </li>
          <li className="relative">
            <img
              className="absolute top-0 -left-7"
              src="/images/icon/icon-helpul.png"
              alt=""
            />
            'Re:think' 캠페인의 일환으로 일회용품 사용 줄이기에 동참하고자 칫솔,
            치약, 면도기, 쉐이빙 젤은 제공되지 않습니다. ( * 2022년 4월 15일 부
            시행)
          </li>
        </ul>
      </section>

      <section className="border border-gray-300 bg-gray-200 flex px-5 py-7">
        <h3 className="basis-3/12 text-3xl">객실예약문의</h3>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <span className="font-bold">TEL</span>
            <span>+82-1-123-1234~5</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">FAX</span>
            <span>+82-1-123-1234</span>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
