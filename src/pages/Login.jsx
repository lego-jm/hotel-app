import React from "react";
import LoginForm from "../components/login/LoginForm";
import Wrapper from "../components/Wrapper";

export default function Login() {
  return (
    <Wrapper custom="py-28">
      <LoginForm>
        <h3 className="md:text-2xl text-xl font-bold text-center">로그인</h3>
      </LoginForm>
    </Wrapper>
  );
}
