import React, { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { emailLogin, googleLogin } from "../../api/firebase";

export default function LoginForm({ children }) {
  const [account, setAccount] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailLogin(account).then(navigate("/"));
  };

  const handleGoogleLogin = () => {
    googleLogin().then(() => navigate("/"));
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
          className="w-full border border-gray-400 p-2 px-4 outline-none"
          type="text"
          name="email"
          placeholder="이메일을 입력하세요"
          value={account?.email || ""}
          onChange={handleChange}
          required
        />
        <label className="self-start mt-5" htmlFor="password">
          비밀번호
        </label>
        <input
          id="password"
          className="w-full border border-gray-400 p-2 px-4 outline-none"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
          value={account?.password || ""}
          autoComplete="off"
          required
        />
        <button className="w-full bg-theme-color p-3 mt-2 rounded-lg hover:text-white transition-all duration-300">
          로그인
        </button>
      </form>
      <button
        className="w-4/12 bg-theme-color p-3 mt-2 rounded-lg hover:text-white transition-all duration-300"
        onClick={handleGoogleLogin}
      >
        Google 로그인
      </button>
    </section>
  );
}
