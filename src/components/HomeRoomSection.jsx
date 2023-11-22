import React from "react";
import HomeInRoomCard from "./HomeInRoomCard";

export default function HomeRoomSection() {
  return (
    <section className="flex gap-3 justify-center my-10">
      <HomeInRoomCard text="MAIN TOWER" img="/images/main-tower.jpg" />
      <HomeInRoomCard
        text="EXECUTIVE TOWER"
        img="/images/executive-tower.jpg"
      />
    </section>
  );
}
