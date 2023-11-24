import React from "react";
import UserForm from "../components/user/UserForm";

export default function Login() {
  const handleGoogleLogin = () => {
    // window.open("/rooms", "_blank");
    // googleLogin();
  };

  return (
    <section className="max-w-7xl text-center pb-14 py-28 mx-auto my-40">
      <UserForm>
        <h3 className="text-2xl font-bold">로그인</h3>
      </UserForm>
    </section>
  );
}
