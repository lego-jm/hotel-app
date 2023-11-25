import React from "react";

import LoginForm from "../components/login/LoginForm";

export default function Login() {
  return (
    <section className="max-w-7xl text-center pb-14 py-28 mx-auto my-40">
      <LoginForm>
        <h3 className="text-2xl font-bold">로그인</h3>
      </LoginForm>
    </section>
  );
}
