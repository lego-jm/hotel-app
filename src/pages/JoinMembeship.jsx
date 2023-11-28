import React from "react";
import JoinForm from "../components/join/JoinForm";
import Wrapper from "../components/Wrapper";

export default function JoinMembeship() {
  return (
    <Wrapper>
      <JoinForm>
        <h3 className="mb-20 text-4xl text-center">회원 정보 입력</h3>
      </JoinForm>
    </Wrapper>
  );
}
