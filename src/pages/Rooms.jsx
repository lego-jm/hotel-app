import React, { useState } from "react";
import ContentIntro from "../components/ContentIntro";
import { RxMixerHorizontal } from "react-icons/rx";
import RoomList from "../components/room/RoomList";
import { useRooms } from "../hooks/useRooms";
import RoomFilterTag from "../components/room/RoomFilterTag";
import Wrapper from "../components/Wrapper";

const text = `서울의 역사와 비즈니스의 중심 소공동에 위치한 리얼호텔은 1,015실 규모를 갖춘 한국 최고의 럭셔리 호텔입니다. 서울 다운타운의 중심에서 남산과 명동, 스카이라인을 감상할 수 있는 리얼호텔은 세계적인 인테리어 회사들이 참가하여 설계한 독창적인 객실을 갖추고 있으며 성공적인 비즈니스를 위한 최적의 공간입니다.`;

export default function Rooms() {
  const {
    getFilterQuery: { data: filters },
  } = useRooms();
  const [filter, setFilter] = useState("전체");
  const handleClick = (select) => {
    setFilter(select);
  };

  return (
    <Wrapper custom="max-w-none">
      <ContentIntro title="객실" text={text} />
      <div className="sm:px-12 border-y border-400 py-6 px-4">
        <div className="lg:flex-nowrap lg:gap-y-0 max-w-7xl mx-auto flex flex-wrap gap-y-4">
          <div className="flex items-center gap-2">
            <RxMixerHorizontal className="text-3xl" />
            <span className="whitespace-nowrap">상세검색</span>
          </div>
          <ul className="lg:flex-nowrap flex flex-wrap items-center gap-2 ml-5 whitespace-nowrap">
            {filters && (
              <>
                <li className="text-xs">
                  <button
                    onClick={() => handleClick("전체")}
                    className={`bg-theme-color p-3 rounded-lg hover:text-white transition-all duration-300 ${
                      filter === "전체" ? "text-white" : ""
                    }`}
                  >
                    전체
                  </button>
                </li>
                {filters?.map((filterItem, index) => (
                  <RoomFilterTag
                    key={index}
                    filterItem={filterItem}
                    filter={filter}
                    select={handleClick}
                  />
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
      <RoomList filter={filter} />
    </Wrapper>
  );
}
