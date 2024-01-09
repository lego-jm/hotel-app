import React, { useEffect, useState } from "react";

export default function PassWordValidateCheck({ account }) {
  const [text, setText] = useState("");

  console.log(account);
  useEffect(() => {
    account?.password !== account?.passwordCheck
      ? setText({ password: "비밀번호가 일치하지 않습니다." })
      : setText("");
  }, [account]);

  return <p className={`text-red-500 mt-2`}>{text.password}</p>;
}
