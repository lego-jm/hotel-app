import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminButton from "../ui/AdminButton";
import { useUsers } from "../../../hooks/useUsers";
import nationData from "../../../data/nation";

export default function AdminUserUpdate() {
  const nationArr = nationData();
  const navigate = useNavigate();
  const [updateUser, setUpdateUser] = useState();
  const [updateNation, setUpdateNation] = useState();
  const { updateUserQuery, removeAccountQuery } = useUsers();
  const {
    state: { user },
  } = useLocation();

  useEffect(() => {
    user && setUpdateUser({ ...user });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("회원정보를 수정하시겠습니까?")) {
      updateUserQuery.mutate(
        {
          ...updateUser,
        },
        { onSuccess: () => navigate("/admin/users") }
      );
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser((prev) => ({ ...prev, [name]: value }));
  };

  console.log(user);

  return (
    <>
      <h3 className="text-2xl mb-3">회원 수정</h3>
      <form
        className="w-full flex flex-col gap-7 border border-theme-color rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="email">
            이메일
          </label>
          <input
            id="email"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2 resize-none"
            type="text"
            name="email"
            onChange={handleChange}
            value={updateUser?.email || ""}
            disabled
          />
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="nation">
            국가
          </label>
          <select
            className="w-4/12 border border-gray-400 p-2 px-3 outline-none"
            name="nation"
            id="nation"
            onChange={(e) =>
              setUpdateNation({ [e.target.name]: e.target.value })
            }
            value={updateUser?.nation || updateNation?.nation}
          >
            {nationArr.map((nation, index) => (
              <option key={index} value={nation}>
                {nation}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="enNameFt">
            영문 이름
          </label>
          <div className="flex gap-2 w-8/12">
            <input
              id="enNameFt"
              className="w-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="text"
              name="enNameFt"
              placeholder="영문 성을 입력하세요"
              onChange={handleChange}
              value={updateUser?.firstName || ""}
              autoComplete="off"
              required
            />
            <input
              className="w-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="text"
              name="enNameLt"
              placeholder="영문 이름을 입력하세요"
              onChange={handleChange}
              value={updateUser?.lastName || ""}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="birthDate">
            생년월일
          </label>
          <input
            id="birthDate"
            className="w-4/12 border border-gray-400 p-2 px-3 outline-none"
            type="text"
            name="birthDate"
            placeholder="YYYY.MM.DD"
            onChange={handleChange}
            value={updateUser?.birthDate || ""}
            autoComplete="off"
            required
            maxLength={10}
          />
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="phone">
            연락처
          </label>
          <input
            id="phone"
            className="w-4/12 border border-gray-400 p-2 px-3 outline-none"
            type="number"
            name="phone"
            placeholder="연락처를 입력하세요"
            onChange={handleChange}
            value={updateUser?.phone || ""}
            autoComplete="off"
            required
            maxLength={11}
          />
        </div>

        <div className="flex gap-5">
          <AdminButton type="submit" text="회원수정" />
          <AdminButton
            type="button"
            text="회원 삭제"
            event={() =>
              removeAccountQuery.mutate(user.uid, {
                onSuccess: () => {
                  navigate("/admin/users");
                },
              })
            }
          />
        </div>
      </form>
    </>
  );
}
