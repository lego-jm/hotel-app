import React from "react";
import PassWordValidateCheck from "./PassWordValidateCheck";
import PassWordUpdate from "../join/PassWordUpdate";
import Warning from "../join/Warning";

export default function PassWord({ handleChange, account, userInfo }) {
  if (userInfo) return <PassWordUpdate />;

  return (
    <div className="flex flex-col border-t border-gray-200">
      <label className="self-start mt-5" htmlFor="password">
        비밀번호*
      </label>
      <div className="flex gap-2 w-8/12 mb-3">
        <input
          id="password"
          className="w-1/2 border border-gray-400 p-2 px-3 outline-none"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
          value={account?.password || ""}
          autoComplete="off"
          required
        />
        <input
          className="w-1/2 border border-gray-400 p-2 px-3 outline-none"
          type="password"
          name="passwordCheck"
          placeholder="한번 더 같은 비밀번호를 입력하세요"
          onChange={handleChange}
          value={account?.passwordCheck || ""}
          autoComplete="off"
          required
        />
      </div>
      <PassWordValidateCheck account={account} />
      <Warning
        text="아이디, 이름, 생일, 휴대전화번호 등을 포함하는 비밀번호 사용은 안전하지
      않을 수 있습니다."
      />
    </div>
  );
}
