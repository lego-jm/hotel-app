import React from "react";
import Banner from "../components/Banner";
import HomeRoomSection from "../components/home/HomeRoomSection";
import HomeAttractionSection from "../components/home/HomeAttractionSection";
import HomeMapSection from "../components/home/HomeMapSection";
import HomdDescriptionSection from "../components/home/HomdDescriptionSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <HomeRoomSection />
      <HomeAttractionSection />
      <HomeMapSection />
      <HomdDescriptionSection />
    </div>
  );
}
