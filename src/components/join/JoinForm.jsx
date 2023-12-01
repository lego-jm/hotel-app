import React, { useEffect, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import nationData from "../../data/nation";
import IdCheck from "./IdCheck";
import PassWord from "./PassWord";
import Warning from "./Warning";
import confirm from "../Confirm";
import { validationCheck } from "../../util/validationCheck";

export default function JoinForm({ children, userInfo }) {
  const nationArr = nationData();
  const navigate = useNavigate();
  const [account, setAccount] = useState();
  const [nationChoice, setNationChoice] = useState();
  const { joinMemberQuery, updateUserQuery } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo) {
      confirm("수정하시겠습니까?", () =>
        updateUserQuery.mutate(
          { ...account, ...nationChoice },
          {
            onSuccess: (res) => {
              validationCheck(res);
              window.alert("수정이 완료되었습니다.");
              navigate("/mypage");
            },
          }
        )
      );
      return;
    }
    joinMemberQuery.mutate(
      { ...account, ...nationChoice },
      {
        onSuccess: (res) => {
          validationCheck(res);
          window.alert("회원가입이 완료되었습니다");
          navigate("/");
        },
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    userInfo && setAccount(userInfo);
  }, [userInfo]);

  return (
    <section className="md:p-10 md:text-base text-sm p-3">
      {children}
      <p className="mb-5 text-theme-color">*필수입력</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 border-t border-gray-200 py-5 w-full"
      >
        <IdCheck
          account={account}
          handleChange={handleChange}
          userInfo={userInfo}
        />
        <PassWord
          handleChange={handleChange}
          account={account}
          userInfo={userInfo}
        />
        <div className="md:w-4/12 flex flex-col border-t border-gray-200">
          <label className="self-start mt-5" htmlFor="nation">
            국가*
          </label>
          <select
            className="border border-gray-400 p-2 px-3 outline-none"
            name="nation"
            id="nation"
            onChange={(e) =>
              setNationChoice({ [e.target.name]: e.target.value })
            }
            value={account?.nation || nationChoice?.nation}
          >
            {nationArr.map((nation, index) => (
              <option key={index} value={nation}>
                {nation}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col border-t border-gray-200">
          <label className="self-start mt-5" htmlFor="enNameFt">
            영문 이름*
          </label>
          <div className="md:w-8/12 md:flex-row flex flex-col gap-2 mb-3">
            <input
              id="enNameFt"
              className="basis-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="text"
              name="enNameFt"
              placeholder="영문 성을 입력하세요"
              onChange={handleChange}
              value={account?.enNameFt || ""}
              autoComplete="off"
              required
            />
            <input
              className="basis-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="text"
              name="enNameLt"
              placeholder="영문 이름을 입력하세요"
              onChange={handleChange}
              value={account?.enNameLt || ""}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="flex flex-col border-t border-gray-200">
          <label className="self-start mt-5" htmlFor="birth">
            생년월일*
          </label>
          <input
            id="birth"
            className="md:w-4/12 border border-gray-400 p-2 px-3 outline-none"
            type="text"
            name="birth"
            placeholder="YYYY.MM.DD"
            onChange={handleChange}
            value={account?.birth || ""}
            autoComplete="off"
            required
            maxLength={10}
          />
        </div>
        <div className="flex flex-col border-t border-gray-200 gap-2">
          <label className="self-start mt-5" htmlFor="phoneNumber">
            연락처*
          </label>
          <input
            id="phoneNumber"
            className="md:w-4/12 border border-gray-400 p-2 px-3 outline-none"
            type="number"
            name="phoneNumber"
            placeholder="연락처를 입력하세요"
            onChange={handleChange}
            value={account?.phoneNumber || ""}
            autoComplete="off"
            required
            maxLength={11}
          />
          <Warning
            text="핸드폰 번호 입력 시 (-) 하이픈 제외 후 입력바랍니다. (예 :
            01012341234)"
          />
        </div>
        <Button
          text={`${userInfo ? "수정" : "완료"}`}
          type="submit"
          custom="w-4/12 mx-auto"
        />
      </form>
    </section>
  );
}
