import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

export default function Banner() {
  return (
    <>
      <Swiper
        loop={true}
        touchRatio={0}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        /* cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        }} */
        // effect={"cube"}
        modules={[Autoplay, Pagination, Navigation, EffectCube]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full" src="/images/main-banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/images/main-banner-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/images/main-banner-3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
