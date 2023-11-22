import React from "react";
import Banner from "../components/Banner";
import HomeRoomSection from "../components/HomeRoomSection";
import HomeAttractionSection from "../components/HomeAttractionSection";
import HomeMapSection from "../components/HomeMapSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <HomeRoomSection />
      <HomeAttractionSection />
      <HomeMapSection />
    </div>
  );
}
