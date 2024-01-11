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
        <div className="text-center text-lg w-11/12">
          <p className="sm:text-lg text-sm">
            해당 사이트는 포트폴리오용으로 제작된 사이트입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
