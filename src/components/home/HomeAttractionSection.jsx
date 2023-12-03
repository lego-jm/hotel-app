import React from "react";
import { Link } from "react-router-dom";

export default function HomeAttractionSection() {
  return (
    <section className="xl:p-0 sm:flex-row flex flex-col gap-3 justify-center items-center p-5">
      <div className="flex flex-col items-center gap-6 basis-4/12">
        <h3 className="md:text-2xl text-lg border-b py-3 border-gray-500">
          주요명소
        </h3>
        <p>역사와 문화가 숨쉬는 곳</p>
        <Link
          className="sm:text-md text-sm text-blue-500 brightness-75"
          to="/attraction"
        >
          자세히 보기 &gt;
        </Link>
      </div>
      <div className="basis-4/12">
        <img src="/images/main-attraction.jpg" alt="" />
      </div>
    </section>
  );
}
