import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function RoomCard({
  room,
  room: {
    title,
    people,
    bedtype,
    area,
    outlook,
    roomtype,
    imgUrl,
    location,
    id,
  },
}) {
  const navigate = useNavigate();
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imgUrl.map((url, index) => (
          <SwiperSlide>
            <figure
              key={index}
              className="overflow-hidden cursor-pointer"
              onClick={() => navigate(`/rooms/${id}`, { state: { room } })}
            >
              <img
                className="w-full hover:scale-105 transition-all duration-500"
                src={url}
                alt=""
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-5 text-sm border-b border-gray-500">
        <div className="">
          <span className="after:border-r after:border-gray-400 after:mx-2">
            {location}
          </span>
          <span>{roomtype}</span>
        </div>
        <h3 className="text-xl">{title}</h3>
        <div className="mt-5 flex">
          <p className="after:border-r after:border-gray-400 after:mx-2">
            <span className="opacity-70">침대타입</span> {bedtype}
          </p>
          <p className="after:border-r after:border-gray-400 after:mx-2">
            <span className="opacity-70">전망</span> {outlook}
          </p>
          <p className="after:border-r after:border-gray-400 after:mx-2">
            <span className="opacity-70">투숙인원</span> {`${people}명`}
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <span className="opacity-70">객실면적</span> {area}
          </p>
          <button onClick={() => navigate(`/rooms/${id}`, { state: { room } })}>
            자세히 보기 &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
