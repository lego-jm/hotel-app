import React from "react";
import KakaoMap from "./KakaoMap";

export default function HomeMapSection() {
  return (
    <section className="flex w-10/12 mx-auto mt-10">
      <div className="bg-theme-color text-white basis-4/12 p-10">
        <h3 className="text-2xl font-bold">리얼호텔 소개</h3>
        <p className="mt-10">
          한국 최고의 럭셔리 비즈니스호텔인 롯데호텔 서울은 1,015실 규모를
          자랑하며 서울 소공동에 자리 잡고 있습니다. 명동, 을지로, 청계천 등
          서울의 중심 관광지들로의 접근성이 뛰어나 서울 관광을 위한 최적의
          위치를 자랑합니다.
        </p>
        <div>
          <span>현지 날씨</span>
          날씨 Api
        </div>
      </div>
      <KakaoMap />
    </section>
  );
}
