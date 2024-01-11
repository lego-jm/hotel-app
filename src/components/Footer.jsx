import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="md:flex-nowrap sm:p-10 bg-footer-color text-footer-font-color flex justify-between p-5 flex-wrap">
      <div className="md:flex-row md:gap-0 flex items-center justify-between w-full flex-col gap-3">
        <Link
          to="/"
          className="sm:flex-col flex items-center justify-center gap-2 w-1/12"
        >
          <img className="sm:w-16 w-10" src="/images/logo-white.png" alt="" />
          <h3 className="sm:text-2xl text-lg">RealHotel</h3>
        </Link>
        {/* <div className="md:block md:flex-nowrap sm:text-sm text-xs flex flex-wrap whitespace-nowrap"> */}
        <div className="text-center text-lg w-11/12">
          <p className="sm:text-base text-sm">
            해당 사이트는 포트폴리오용으로 제작된 사이트입니다.
          </p>

          {/* <span>(주)리얼호텔</span>
          <div className="flex">
            <address className="not-italic">
              04533 서울특별시 중구 을지로 30
            </address>
            <p>/+82-123-1234</p>
          </div>
          <span>대표이사 홍길동 /</span>
          <span> 사업자등록번호 123456-123456 / </span> */}
        </div>
      </div>
      {/* <div className="md:mt-0 sm:text-sm sm:flex-nowrap flex flex-wrap gap-x-5 text-xs whitespace-nowrap h-5 mt-3">
        <span className="hover:text-white transition-all cursor-pointer h-auto">
          개인정보처리방침
        </span>
        <span className="hover:text-white transition-all cursor-pointer">
          사이트 이용약관
        </span>
        <span className="hover:text-white transition-all cursor-pointer">
          약관 및 정책
        </span>
        <span className="hover:text-white transition-all cursor-pointer">
          쿠키 설정
        </span>
      </div> */}
    </div>
  );
}
