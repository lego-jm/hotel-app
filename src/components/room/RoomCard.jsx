import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useAuthContext } from "../../context/AuthContext";

export default function RoomCard({
  room,
  room: {
    no,
    title,
    people,
    bedType,
    area,
    outlook,
    roomtype,
    location,
    imgUrls,
  },
}) {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleClick = () => {
    if (user === undefined) {
      window.alert("로그인 후 이용해주세요.");
      return;
    }
    navigate(`/reservation/${no}`, { state: { room } });
  };

  return (
    <div>
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
        {imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <figure
              className="overflow-hidden cursor-pointer"
              onClick={() => navigate(`/rooms/${no}`, { state: { room } })}
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
      <div className="sm:text-sm text-xs p-5 border-b border-gray-500 mb-2">
        <div className="">
          <span className="after:border-r after:border-gray-400 after:mx-2">
            {location}
          </span>
          <span>{roomtype}</span>
        </div>
        <h3 className="sm:text-xl text-lg">{title}</h3>
        <div className="sm:h-10 mt-5 flex justify-between h-auto">
          <div className="flex flex-wrap w-10/12">
            <p className="after:border-r after:border-gray-400 after:mx-2">
              <span className="opacity-70">침대타입</span> {bedType}
            </p>
            <p className="after:border-r after:border-gray-400 after:mx-2">
              <span className="opacity-70">전망</span> {outlook}
            </p>
            <p className="after:border-r after:border-gray-400 after:mx-2">
              <span className="opacity-70">투숙인원</span> {`${people}명`}
            </p>
            <p>
              <span className="opacity-70">객실면적</span> {area}
            </p>
          </div>
          <button
            className="self-end whitespace-nowrap opacity-70"
            onClick={() => navigate(`/rooms/${no}`, { state: { room } })}
          >
            자세히 보기 &gt;
          </button>
        </div>
      </div>
      <Button text="예약하기" type="button" event={handleClick} />
    </div>
  );
}
