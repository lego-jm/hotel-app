import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-footer-color text-footer-font-color flex justify-between p-10">
      <div className="flex gap-10 items-center">
        <Link to="/" className="flex flex-col items-center gap-2">
          <img className="w-16" src="/images/logo-white.png" alt="" />
          <h3 className="text-2xl">RealHotel</h3>
        </Link>
        <div>
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
      <div className="flex gap-5 text-sm">
        <span className="hover:text-white transition-all cursor-pointer">
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
