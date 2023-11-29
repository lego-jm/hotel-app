import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logOut } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function HotelHeader() {
  const { pathname } = useLocation();
  const { user } = useAuthContext();

  return (
    <header
      className={`${pathname === "/" ? "bg-opacity-80" : ""} ${
        !pathname.includes("/admin") && "fixed top-0 left-0 w-full"
      } bg-white z-10 flex justify-center border-b border-gray-400 p-5 text-default-black`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl">
        <Link to="/" className="flex items-center gap-1">
          <figure>
            <img className="w-10" src="/images/logo.png" alt="logo" />
          </figure>
          <h3 className="text-theme-color text-2xl font-bold">RealHotel</h3>
        </Link>
        <nav className="flex items-center gap-5 transition-all">
          <Link to="/intro" className="hover:text-theme-color duration-300">
            호텔소개
          </Link>
          <Link to="/rooms" className="hover:text-theme-color duration-300">
            객실
          </Link>
          <button
            onClick={() => window.alert("준비중입니다.")}
            className="hover:text-theme-color duration-300"
          >
            다이닝
          </button>
          <Link
            to="/attraction"
            className="hover:text-theme-color duration-300"
          >
            주요명소
          </Link>
          <Link
            to={`/reservation/check/${user?.uid}`}
            className="hover:text-theme-color duration-300"
          >
            예약조회
          </Link>
        </nav>
        <div className="flex justify-evenly basis-2/6">
          {/* <form onSubmit={handleSubmit} className="relative basis-3/6">
            <input
              className="w-full border border-theme-color p-2 px-3 text-xs outline-none rounded-lg"
              type="text"
              placeholder="검색어를 입력해주세요."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="absolute top-2 right-1">
              <IoSearchSharp />
            </button>
          </form> */}
          <nav className="flex items-center justify-end basis-3/6 gap-5">
            {user?.isAdmin && (
              <Link
                to="/admin/users"
                className="hover:text-theme-color duration-300"
              >
                관리자 화면
              </Link>
            )}

            {user && !user.isAdmin && (
              <Link
                to="/mypage"
                className="hover:text-theme-color duration-300"
              >
                마이페이지
              </Link>
            )}

            {user ? (
              <Link
                onClick={logOut}
                to="/login"
                className="hover:text-theme-color duration-300"
              >
                로그아웃
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-theme-color duration-300"
                >
                  로그인
                </Link>
                <Link
                  to="/member"
                  className="hover:text-theme-color duration-300"
                >
                  회원가입
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
