import React from "react";
import { Link } from "react-router-dom";

export default function HomeAttractionSection() {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col items-center gap-6 basis-4/12">
        <h3 className="text-2xl border-b py-3 border-gray-500">주요명소</h3>
        <p>역사와 문화가 숨쉬는 곳</p>
        <Link className="text-blue-500 brightness-75" to="/attraction">
          자세히 보기 &gt;
        </Link>
      </div>
      <div className="relative">
        <img src="/images/main-attraction.jpg" alt="" />
        {/* <div className="absolute top-16 left-16">
          <h3 className="text-3xl">Le Salon</h3>
          <p className="text-md mt-4">스타일과 럭셔리의 조화</p>
        </div> */}
      </div>
    </section>
  );
}
