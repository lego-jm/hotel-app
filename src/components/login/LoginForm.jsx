import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { googleLogin } from "../../api/firebase";
import Button from "../ui/Button";
import { validationCheck } from "../util/validationCheck";
import { useUsers } from "../../hooks/useUsers";

export default function LoginForm({ children }) {
  const [account, setAccount] = useState();
  const { emailLoginQuery } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailLoginQuery.mutate(account, {
      onSuccess: (res) => {
        validationCheck(res);
        navigate("/");
      },
    });
  };

  /* const handleGoogleLogin = () => {
    googleLogin().then(() => navigate("/"));
  }; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex flex-col items-center gap-3 p-10 max-w-xl mx-auto">
      {children}
      <form
        onSubmit={handleSubmit}
        className="md:text-base flex flex-col gap-2 w-full text-sm"
      >
        <label className="self-start mt-5" htmlFor="email">
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
        <Button
          text="로그인"
          type="submit"
          className="w-full bg-theme-color p-3 mt-2 rounded-lg hover:text-white transition-all duration-300"
        />
      </form>
      {/* <Button
        text="Google 로그인"
        type="button"
        event={handleGoogleLogin}
        custom="w-full"
      /> */}
    </section>
  );
}
