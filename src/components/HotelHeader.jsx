import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logOut } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function HotelHeader() {
  const { pathname } = useLocation();
  const { user } = useAuthContext();
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className={`${pathname === "/" ? "bg-opacity-80" : ""} ${
        !pathname.includes("/admin") && "sticky top-0 left-0 w-full "
      } bg-white z-10 justify-center border-b border-gray-400 p-5 text-default-black md:flex`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl whitespace-nowrap">
        <div className="lg:w-auto flex justify-between w-full">
          <Link to="/" className="flex items-center gap-1 basis-1/6">
            <figure className="shrink-0">
              <img className="w-10" src="/images/logo.png" alt="logo" />
            </figure>
            <h3 className="text-theme-color text-2xl font-bold">RealHotel</h3>
          </Link>
          <IoIosMenu
            onClick={() => setIsActive(true)}
            className="lg:hidden text-4xl"
          />
        </div>
        <div
          className={`${
            isActive ? "md:block" : ""
          } fixed top-0 left-0 w-full h-full hidden bg-black opacity-70 touch-none`}
        ></div>
        <nav
          className={`md:${
            isActive ? "right-0" : "-right-1/2"
          } md:w-2/6 md:text-base lg:static lg:bg-transparent lg:w-full lg:h-auto w-full h-full lg:basis-4/6 lg:flex-row lg:justify-between fixed ${
            isActive ? "right-0" : "-right-full"
          } top-0 z-10 bg-white flex flex-col text-sm transition-all duration-300 touch-none`}
        >
          <nav className="lg:order-none lg:flex-row lg:justify-center flex flex-col items-center gap-x-5 order-1 transition-colors basis-1/2">
            <Link
              to="/intro"
              className="lg:border-none lg:p-0 lg:w-auto hover:text-theme-color duration-300 p-5 border-b gray-200 w-5/6 text-center"
              onClick={() => setIsActive(false)}
            >
              호텔소개
            </Link>
            <Link
              to="/rooms"
              className="lg:border-none lg:p-0 lg:w-auto hover:text-theme-color duration-300 p-5 border-b gray-200 w-5/6 text-center"
              onClick={() => setIsActive(false)}
            >
              객실
            </Link>
            <button
              onClick={() => window.alert("준비중입니다.")}
              className="lg:border-none lg:p-0 lg:w-auto hover:text-theme-color duration-300 p-5 border-b gray-200 w-5/6 text-center"
            >
              다이닝
            </button>
            <Link
              to="/attraction"
              className="lg:border-none lg:p-0 lg:w-auto hover:text-theme-color duration-300 p-5 border-b gray-200 w-5/6 text-center"
              onClick={() => setIsActive(false)}
            >
              주요명소
            </Link>
            <Link
              to={`/reservation/check`}
              className="lg:border-none lg:p-0 lg:w-auto hover:text-theme-color duration-300 p-5 border-b gray-200 w-5/6 text-center"
              onClick={() => setIsActive(false)}
            >
              예약조회
            </Link>
          </nav>
          <nav className="lg:text-black lg:bg-transparent lg:flex-row lg:basis-2/6 lg:p-0 lg:justify-end flex flex-col justify-between gap-5 p-6 bg-neutral-700 text-white">
            <IoMdClose
              onClick={() => setIsActive(false)}
              className="lg:hidden block text-3xl self-end"
            />
            <div className="flex justify-between items-center gap-5">
              {user?.isAdmin && (
                <Link
                  to="/admin/users"
                  className="hover:text-theme-color duration-300 py-1"
                >
                  관리자 화면
                </Link>
              )}
              {user && !user.isAdmin && (
                <Link
                  to="/mypage"
                  className="hover:text-theme-color duration-300 py-1"
                  onClick={() => setIsActive(false)}
                >
                  마이페이지
                </Link>
              )}
              {user ? (
                <Link
                  onClick={() => {
                    logOut();
                    setIsActive(false);
                  }}
                  to="/login"
                  className="hover:text-theme-color duration-300 py-1"
                >
                  로그아웃
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="hover:text-theme-color duration-300 py-1"
                    onClick={() => setIsActive(false)}
                  >
                    로그인
                  </Link>
                  <Link
                    to="/member"
                    className="hover:text-theme-color duration-300 py-1"
                    onClick={() => setIsActive(false)}
                  >
                    회원가입
                  </Link>
                </>
              )}
            </div>
          </nav>
        </nav>
      </div>
    </header>
  );
}
