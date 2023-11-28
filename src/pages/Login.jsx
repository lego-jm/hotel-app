import React from "react";

import LoginForm from "../components/login/LoginForm";
import Wrapper from "../components/Wrapper";

export default function Login() {
  return (
    <Wrapper>
      <LoginForm>
        <h3 className="text-2xl font-bold text-center">로그인</h3>
      </LoginForm>
    </Wrapper>
  );
}
