import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function RoomDetailSwipe({ imgUrl }) {
  return (
    <Swiper
      loop={true}
      touchRatio={0}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {imgUrl.map((url, index) => (
        <SwiperSlide>
          <figure key={index} className="overflow-hidden ">
            <img className="w-full" src={url} alt="" />
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
