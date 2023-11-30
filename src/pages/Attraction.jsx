import React from "react";
import Wrapper from "../components/Wrapper";
import AttractionContents from "../components/attraction/AttractionContents";

export default function Attraction() {
  return (
    <Wrapper>
      <h3 className="md:text-4xl text-3xl text-center">주요명소</h3>
      <AttractionContents />
    </Wrapper>
  );
}
