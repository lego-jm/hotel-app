import React from "react";
import Button from "../components/ui/Button";
import MyPageInfo from "../components/mypage/MyPageInfo";
import MyPageUse from "../components/mypage/MyPageUse";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();
  const {
    getUserInfoQuery: { isLoading, error, data: userInfo },
  } = useUsers();

  return (
    <section className="max-w-7xl pb-9 mx-auto my-40">
      <h2 className="text-4xl text-center border-b-2 p-10 border-black">
        나의 정보
      </h2>
      <div className="flex gap-10 mt-10 text-center">
        <MyPageInfo user={userInfo} />
        <MyPageUse />
      </div>
      <div className="flex gap-5 mt-3">
        <Button
          text="회원정보"
          type="button"
          event={() =>
            navigate(`/mypage/${userInfo.uid}`, { state: { userInfo } })
          }
        />
        <Button
          text="예약조회"
          type="button"
          event={() => navigate(`/reservation/check/${userInfo.uid}`)}
        />
      </div>
    </section>
  );
}
