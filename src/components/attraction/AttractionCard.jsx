import React from "react";

export default function AttractionCard() {
  return (
    <section className="flex p-5">
      <figure className="basis-1/2">
        <img
          className="w-full"
          src="https://www.lottehotel.com/content/dam/lotte-hotel/rf/g-0811.jpg"
          alt=""
        />
      </figure>
      <section className="flex flex-col gap-7 basis-1/2 p-5">
        <h3 className="text-2xl">경복궁</h3>
        <p className="text-md text-footer-font-color">
          리얼호텔에서 10여 분 걸어가면 도착할 수 있으며, 광화문 광장이나
          청와대와 가깝습니다. 우리나라 대표 고궁인 경복궁은 왕의 집무실, 태후화
          황후의 예쁜 궁궐과 정원, 연회를 열던 경회루 등이 있습니다. 때때로
          야간개장을 하기도 하여 낮과 밤이 모두 아름다운 고궁입니다. 경복궁에서
          진행되는 수문장 교대 의식 또한 관광객에게 인기가 많습니다. 근처에서
          국립민속박물관, 국립현대미술관 서울, 국립고궁박물관 등을 둘러보실 수
          있으며, 경복궁은 3호선 경복궁역이나 5호선 광화문역을 통해 가실 수
          있습니다.
        </p>
        <p>이동 소요 시간 : 광화문 광장 방향 도보 10분이내</p>
      </section>
    </section>
  );
}
