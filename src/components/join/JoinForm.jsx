import React, { useEffect, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { PiWarningCircleLight } from "react-icons/pi";
import nationData from "../../data/nation";

export default function JoinForm({ children }) {
  const nationArr = nationData();
  const navigate = useNavigate();
  const [account, setAccount] = useState();
  const [nationChoice, setNationChoice] = useState();
  const [text, setText] = useState({ email: "", password: "", isCheck: false });
  const { joinMemberQuery, idCheckQuery } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();
    joinMemberQuery.mutate(
      { ...account, ...nationChoice },
      {
        onSuccess: () => {
          window.alert("회원가입이 완료되었습니다");
          navigate("/");
        },
      }
    );
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    account?.password !== account?.passwordCheck
      ? setText({ password: "비밀번호가 일치하지 않습니다." })
      : setText("");
  }, [account]);

  return (
    <section className="p-20">
      {children}
      <p className="mb-5 text-theme-color">*필수입력</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 border-t border-gray-200 py-5"
      >
        <div>
          <label className="self-start" htmlFor="email">
            이메일*
          </label>
          <div className="flex gap-2">
            <input
              id="email"
              className="w-4/12 border border-gray-400 p-2 px-3 outline-none"
              type="text"
              name="email"
              placeholder="이메일을 입력하세요"
              value={account?.email || ""}
              onChange={handleChange}
              required
            />
            <Button text="중복확인" type="button" event={handleIdCheck} />
          </div>
          <p
            className={`${text.isCheck && "text-green-500"} text-red-500 mt-2`}
          >
            {text.email}
          </p>
        </div>
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
          <p className="text-red-500">{text.password}</p>
          <p className="w-8/12 flex items-center gap-1 text-xs font-light text-yellow-700 bg-yellow-100 p-4 border border-yellow-700 ">
            <PiWarningCircleLight className="text-xl font-bold" />
            아이디, 이름, 생일, 휴대전화번호 등을 포함하는 비밀번호 사용은
            안전하지 않을 수 있습니다.
          </p>
        </div>
        <div className="flex flex-col border-t border-gray-200">
          <label className="self-start mt-5" htmlFor="nation">
            국가*
          </label>
          <select
            className="w-4/12 border border-gray-400 p-2 px-3 outline-none"
            name="nation"
            id="nation"
            onChange={(e) =>
              setNationChoice({ [e.target.name]: e.target.value })
            }
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
          <div className="flex gap-2 w-8/12 mb-3">
            <input
              id="enNameFt"
              className="w-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="text"
              name="enNameFt"
              placeholder="영문 성을 입력하세요"
              onChange={handleChange}
              value={account?.enNameFt || ""}
              autoComplete="off"
              required
            />
            <input
              className="w-1/2 border border-gray-400 p-2 px-3 outline-none"
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
            className="w-4/12 border border-gray-400 p-2 px-3 outline-none"
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
            className="w-4/12 border border-gray-400 p-2 px-3 outline-none"
            type="text"
            name="phoneNumber"
            placeholder="연락처를 입력하세요"
            onChange={handleChange}
            value={account?.phoneNumber || ""}
            autoComplete="off"
            required
            maxLength={11}
          />
          <p className="w-8/12 flex items-center gap-1 text-xs font-light text-yellow-700 bg-yellow-100 p-4 border border-yellow-700 ">
            <PiWarningCircleLight className="text-xl font-bold" />
            핸드폰 번호 입력 시 (-) 하이픈 제외 후 입력바랍니다. (예 :
            01012341234)
          </p>
        </div>

        <Button text="완료" type="submit" />
      </form>
    </section>
  );
}
