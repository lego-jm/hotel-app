import React from "react";
import Wrapper from "../components/Wrapper";
import { useLocation } from "react-router-dom";
import JoinForm from "../components/join/JoinForm";

export default function MyPageDatail() {
  const {
    state: { userInfo },
  } = useLocation();
  return (
    <Wrapper>
      <h3 className="md:text-3xl text-2xl text-center">회원 정보 수정</h3>
      <JoinForm userInfo={userInfo} />
    </Wrapper>
  );
}
