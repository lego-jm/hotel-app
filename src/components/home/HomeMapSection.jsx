import React, { useEffect, useState } from "react";
import KakaoMap from "../KakaoMap";
import { weatherApi } from "../../api/weather";
import moment from "moment";

export default function HomeMapSection() {
  const [weather, setWeather] = useState();

  const nowDate = moment().format("YYYY년 MM월 DD일 HH:mm");

  useEffect(() => {
    weatherApi(37.565265, 126.980896).then((data) => setWeather(data));
  }, []);

  return (
    <section className="lg:flex-row md:w-10/12 w-full flex flex-col mx-auto mt-10">
      <div className="xl:p-10 lg:order-none bg-theme-color text-white basis-4/12 p-7 order-0">
        <h3 className="md:text-2xl text-1xl font-bold">리얼호텔 소개</h3>
        <p className="md:mt-7 md:text-base text-sm mt-3">
          한국 최고의 럭셔리 비즈니스호텔인 리얼호텔은 1,015실 규모를 자랑하며
          서울 소공동에 자리 잡고 있습니다. 명동, 을지로, 청계천 등 서울의 중심
          관광지들로의 접근성이 뛰어나 서울 관광을 위한 최적의 위치를
          자랑합니다.
        </p>
        <article className="mt-5">
          <span className="bg-white bg-opacity-30 text-white border border-white p-1 text-sm">
            현지 날씨
          </span>
          <div className="flex items-center gap-2">
            <figure className="lg:basis-3/12 shrink-0 ">
              <img
                className="w-full"
                src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                alt=""
              />
            </figure>
            <div className="md:text-base text-sm break-keep">
              <p>{nowDate}</p>
              <p>
                {`${weather?.main.temp.toString().slice(0, 3)}℃ /
                ${weather?.main.humidity}%`}
              </p>
              <p></p>
            </div>
          </div>
        </article>
      </div>
      <KakaoMap />
    </section>
  );
}
