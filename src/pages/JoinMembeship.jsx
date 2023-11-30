import React from "react";
import JoinForm from "../components/join/JoinForm";
import Wrapper from "../components/Wrapper";

export default function JoinMembeship() {
  return (
    <Wrapper>
      <JoinForm>
        <h3 className="md:text-3xl md:mb-20 mb-5 text-2xl text-center">
          회원 정보 입력
        </h3>
      </JoinForm>
    </Wrapper>
  );
}
