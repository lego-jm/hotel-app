import React from "react";
import { Link } from "react-router-dom";
import ContentIntro from "../components/ContentIntro";
import Wrapper from "../components/Wrapper";

const text = `국내 최고의 럭셔리 비즈니스 호텔인 리얼호텔은 1,015실 규모를 자랑하며
서울 소공동에 자리잡고 있습니다. 명동, 을지로, 청계천 등 서울의 중심
관광지들로의 접근성이 뛰어나 서울 관광을 위한 최적의 위치를
자랑합니다. 네 개의 세계적인 인테리어 회사들이 참가하여 설계한
독창적인 인테리어의 객실은 최신 트렌드를 반영하고 있으며, 성공적인
비즈니스를 위한 클럽 플로어에서는 품위와 정교함을 느끼실 수 있습니다.
또한, 리얼호텔에서는 따뜻하고 고급의 가족모임과 럭셔리 웨딩, 대규모
국제회의 진행 등의 비즈니스 행사를 위한 최상의 시설을 제공하고 있으며,
최고급 레스토랑 또한 국빈 등 VIP고객을 모시기에 최적의 선택입니다.`;

export default function Intro() {
  return (
    <Wrapper>
      <ContentIntro title="리얼호텔 소개" text={text} />
      <section className="border-t border-gray-400 pt-14">
        <h3 className="text-4xl text-center">ROOMS & SUITE</h3>
        <section className="flex gap-7 mt-7">
          <figure>
            <img src="/images/intro/intro-room-img.jpg" alt="" />
          </figure>
          <article>
            <h5 className="text-xl font-bold">객실</h5>
            <p className="text-lg mt-5">
              비즈니스 고객, 관광객을 포함한 다양한 고객층이 만족할 수 있는
              맞춤형 공간을 제공합니다.
            </p>
            <ul className="text-md text-gray-500 mb-10">
              <li>- 전 객실에서 서울 도심의 환상적인 야경을 감상</li>
              <li>- 최신 시설과 현대적인 감각의 인테리어</li>
              <li>- 최상의 평온함을 위한 해온(he:on) 베딩 시스템</li>
            </ul>
            <Link to="/rooms">자세히 보기 &gt;</Link>
          </article>
        </section>
      </section>
      <section className="mt-20">
        <h3 className="text-4xl text-center">DINING</h3>
        <section className="flex gap-7 mt-7">
          <figure>
            <img src="/images/intro/intro-dining-img.jpg" alt="" />
          </figure>
          <article>
            <h5 className="text-xl font-bold">다이닝</h5>
            <p className="text-lg mt-5">
              세계적으로 인정받는 셰프들이 직접 선보이는 다양한 일품요리를
              즐기실 수 있습니다.
            </p>
            <ul className="text-md text-gray-500 mb-10">
              <li>- 미쉐린 1스타 레스토랑 피에르 가니에르 서울</li>
              <li>- 신선한 재료를 엄선하여 만든 최고급 요리</li>
              <li>- 세련되고 현대적인 감각의 호텔 레스토랑</li>
            </ul>
            <button onClick={() => window.alert("준비중입니다.")}>
              자세히 보기 &gt;
            </button>
            {/* <Link to="/dining">자세히 보기 &gt;</Link> */}
          </article>
        </section>
      </section>
    </Wrapper>
  );
}
