import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useReservation } from "../../../hooks/useReservation";
import AdminButton from "../ui/AdminButton";

export default function AdminReservationUpdate() {
  const {
    state: { reservation },
  } = useLocation();

  const navigate = useNavigate();
  const [updateReservation, setUpdateReservation] = useState();
  const { updateUserQuery, removeAccountQuery } = useReservation();

  useEffect(() => {
    reservation && setUpdateReservation({ ...reservation });
  }, [reservation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("회원정보를 수정하시겠습니까?")) {
      updateUserQuery.mutate(
        {
          ...updateReservation,
        },
        { onSuccess: () => navigate("/admin/reservation") }
      );
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateReservation((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h3 className="text-2xl mb-3">예약 상세조회</h3>
      <form
        className="w-full flex flex-col gap-7 border border-theme-color rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="email">
            회원 이메일
          </label>
          <input
            id="email"
            className="border w-3/6 border-gray-400 outline-none p-2 px-2 resize-none"
            type="text"
            name="email"
            onChange={handleChange}
            value={updateReservation?.email || ""}
            disabled
          />
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
              value={updateReservation?.enNameFt || ""}
              autoComplete="off"
              required
            />
            <input
              className="w-1/2 border border-gray-400 p-2 px-3 outline-none"
              type="text"
              name="enNameLt"
              placeholder="영문 이름을 입력하세요"
              onChange={handleChange}
              value={updateReservation?.enNameLt || ""}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="birth">
            생년월일
          </label>
          <input
            id="birth"
            className="w-4/12 border border-gray-400 p-2 px-3 outline-none"
            type="text"
            name="birth"
            placeholder="YYYY.MM.DD"
            onChange={handleChange}
            value={updateReservation?.birth || ""}
            autoComplete="off"
            required
            maxLength={10}
          />
        </div>
        <div className="flex items-start gap-3">
          <label className="w-1/12 mt-2" htmlFor="phoneNumber">
            연락처
          </label>
          <input
            id="phoneNumber"
            className="w-4/12 border border-gray-400 p-2 px-3 outline-none"
            type="number"
            name="phoneNumber"
            placeholder="연락처를 입력하세요"
            onChange={handleChange}
            value={updateReservation?.phoneNumber || ""}
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
              removeAccountQuery.mutate(updateReservation.id, {
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
