import React from "react";
import ContentIntro from "../components/ContentIntro";
import { RxMixerHorizontal } from "react-icons/rx";
import RoomList from "../components/room/RoomList";

const text = `서울의 역사와 비즈니스의 중심 소공동에 위치한 리얼호텔은 1,015실 규모를 갖춘 한국 최고의 럭셔리 호텔입니다. 서울 다운타운의 중심에서 남산과 명동, 스카이라인을 감상할 수 있는 리얼호텔은 세계적인 인테리어 회사들이 참가하여 설계한 독창적인 객실을 갖추고 있으며 성공적인 비즈니스를 위한 최적의 공간입니다.`;

export default function Rooms() {
  return (
    <section className="mx-auto py-20">
      <ContentIntro title="객실" text={text} />
      <div className="border-y border-400 py-6 px-12">
        <div className="max-w-7xl mx-auto">
          <button className="flex items-center gap-2">
            <RxMixerHorizontal className="text-3xl" />
            <span>상세검색</span>
          </button>
        </div>
      </div>
      <RoomList />
    </section>
  );
}
