import React from "react";
import PassWordValidateCheck from "./PassWordValidateCheck";
import Warning from "../join/Warning";
import { useState } from "react";
import Button from "../ui/Button";
import { useLocation } from "react-router-dom";

export default function PassWord({ handleChange, account }) {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col border-t border-gray-200">
      <label className="self-start mt-5" htmlFor="password">
        비밀번호*
      </label>
      {pathname === "/member" ? (
        <>
          <div className="md:w-8/12 md:flex-row flex flex-col gap-2 mb-3">
            <input
              id="password"
              className="basis-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              className="basis-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="password"
              name="passwordCheck"
              placeholder="한번 더 같은 비밀번호를 입력하세요"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <PassWordValidateCheck account={account} />
          <Warning
            text="아이디, 이름, 생일, 휴대전화번호 등을 포함하는 비밀번호 사용은 안전하지
      않을 수 있습니다."
          />
        </>
      ) : active ? (
        <>
          <div className="md:w-8/12 md:flex-row flex flex-col gap-2 mb-3">
            <input
              id="password"
              className="basis-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              className="basis-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="password"
              name="passwordCheck"
              placeholder="한번 더 같은 비밀번호를 입력하세요"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <PassWordValidateCheck account={account} />
          <Warning
            text="아이디, 이름, 생일, 휴대전화번호 등을 포함하는 비밀번호 사용은 안전하지
      않을 수 있습니다."
          />
        </>
      ) : (
        <Button
          text="비밀번호 재설정"
          type="button"
          event={() => setActive((prev) => !prev)}
          custom="w-3/12"
        />
      )}
    </div>
  );
}
