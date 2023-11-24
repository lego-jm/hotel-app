import React, { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useLocation, useNavigate } from "react-router-dom";
import { emailLogin } from "../../api/firebase";

export default function UserForm({ children }) {
  const [account, setAccount] = useState();
  const { joinMemberQuery } = useUsers();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pathname === "/login") {
      emailLogin(account).then(() => {
        navigate("/");
      });
    } else {
      joinMemberQuery.mutate(account, {
        onSuccess: () => {
          window.alert("회원가입이 완료되었습니다.");
          navigate("/");
        },
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      {children}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-4/12 mx-auto"
      >
        <label className="self-start  mt-5" htmlFor="email">
          이메일
        </label>
        <input
          id="email"
          className="w-full border border-gray-400 rounded-md p-2 px-4 outline-none"
          type="text"
          name="email"
          placeholder="이메일을 입력하세요"
          value={account?.email || ""}
          onChange={handleChange}
        />
        <label className="self-start mt-5" htmlFor="password">
          비밀번호
        </label>
        <input
          id="password"
          className="w-full border border-gray-400 rounded-md p-2 px-4 outline-none"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
          value={account?.password || ""}
          autoComplete="off"
        />
        <button className="w-full bg-theme-color p-3 mt-2 rounded-lg hover:text-white transition-all duration-300">
          {`${pathname === "/login" ? "로그인" : "회원가입"}`}
        </button>
      </form>
    </section>
  );
}
