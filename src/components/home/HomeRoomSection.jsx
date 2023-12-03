import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function HomeRoomSection() {
  return (
    <section className="2xl:p-0 md:flex-row md:gap-3 md:w-full flex flex-col gap-10 justify-center my-10 p-7">
      <ScrollAnimation animateIn="animate__fadeInLeft">
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <img
              className="transition-all hover:scale-105 duration-500"
              src="/images/main-tower.jpg"
              alt="room-img"
            />
          </div>
          <h3 className="sm:text-xl sm:h-32 flex justify-center items-center bg-theme-color text-white text-md h-24">
            MAIN TOWER
          </h3>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInRight" delay={300}>
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <img
              className="transition-all hover:scale-105 duration-500"
              src="/images/executive-tower.jpg"
              alt="room-img"
            />
          </div>
          <h3 className="sm:text-xl sm:h-32 flex justify-center items-center bg-theme-color text-white text-md h-24">
            EXECUTIVE TOWER
          </h3>
        </div>
      </ScrollAnimation>
    </section>
  );
}
