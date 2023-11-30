import React, { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import Button from "../ui/Button";

export default function IdCheck({ account, handleChange, userInfo }) {
  const [text, setText] = useState({ email: "", isCheck: false });
  const { idCheckQuery } = useUsers();

  const handleIdCheck = () => {
    if (account?.email) {
      idCheckQuery.mutate(account.email, {
        onSuccess: (isCheck) => {
          isCheck
            ? setText({ email: "사용자가 이미 있습니다." })
            : setText({ email: "사용가능한 이메일입니다.", isCheck: true });
          setTimeout(() => setText({ email: "" }), [1500]);
        },
      });
    } else {
      setText({ email: "이메일을 먼저 입력해주세요." });
    }
  };

  return (
    <div>
      <label className="self-start" htmlFor="email">
        이메일*
      </label>
      <div className="md:flex-row flex flex-col gap-2">
        <input
          id="email"
          className="basis-4/12 border border-gray-400 p-2 px-3 outline-none"
          type="text"
          name="email"
          placeholder="이메일을 입력하세요"
          value={account?.email || ""}
          onChange={handleChange}
          required
          disabled={userInfo}
        />
        <Button
          text="중복확인"
          type="button"
          event={handleIdCheck}
          custom={userInfo && "hidden"}
        />
      </div>
      <p className={`${text.isCheck ? "text-green-500" : "text-red-500 mt-2"}`}>
        {text.email}
      </p>
    </div>
  );
}
