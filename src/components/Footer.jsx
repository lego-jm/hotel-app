import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="md:flex-nowrap sm:p-10 bg-footer-color text-footer-font-color flex justify-between p-5 flex-wrap">
      <div className="sm:gap-10 flex flex-wrap gap-5 items-center">
        <Link to="/" className="sm:flex-col flex items-center gap-2">
          <img className="sm:w-16 w-10" src="/images/logo-white.png" alt="" />
          <h3 className="sm:text-2xl text-lg">RealHotel</h3>
        </Link>
        <div className="md:block md:flex-nowrap sm:text-md text-xs flex flex-wrap whitespace-nowrap">
          <span>(주)리얼호텔</span>
          <div className="flex">
            <address className="not-italic">
              04533 서울특별시 중구 을지로 30
            </address>
            <p>/+82-123-1234</p>
          </div>
          <span>대표이사 홍길동 /</span>
          <span> 사업자등록번호 123456-123456 / </span>
        </div>
      </div>
      <div className="md:mt-0 sm:text-sm sm:flex-nowrap flex flex-wrap gap-x-5 text-xs whitespace-nowrap h-5 mt-3">
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
      </div>
    </div>
  );
}
