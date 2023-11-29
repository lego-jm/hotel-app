import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import AttractionContents from "../components/attraction/AttractionContents";

export default function Attraction() {
  const [isActive, setIsActive] = useState({ history: false, culture: false });

  console.log(isActive);
  return (
    <Wrapper>
      <h3 className="text-4xl text-center">주요명소</h3>
      <nav className="flex gap-2 mt-10 text-white">
        <button
          onClick={() => setIsActive(true)}
          className="border border-black border-opacity-60 bg-black bg-opacity-60 basis-1/2 py-5"
        >
          역사 주요명소
        </button>
        <button
          onClick={() => setIsActive()}
          className="border border-black border-opacity-60 text-black basis-1/2 py-5 hover:bg-black hover:bg-opacity-60 hover:text-white transition-all"
        >
          문화 주요명소
        </button>
      </nav>
      <AttractionContents />
    </Wrapper>
  );
}
