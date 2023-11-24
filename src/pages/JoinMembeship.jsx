import React from "react";
import UserForm from "../components/user/UserForm";

export default function JoinMembeship() {
  return (
    <section className="max-w-7xl text-center pb-14 mx-auto my-40">
      <UserForm>
        <h1 className="mb-20 text-4xl font-bold">회원가입</h1>
        <h3 className="text-lg mb-5">회원정보 입력</h3>
      </UserForm>
    </section>
  );
}
