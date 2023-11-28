import React from "react";
import Button from "../components/ui/Button";
import MyPageInfo from "../components/mypage/MyPageInfo";
import MyPageUse from "../components/mypage/MyPageUse";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";

export default function MyPage() {
  const navigate = useNavigate();
  const {
    deleteAccountQuery,
    getUserInfoQuery: { isLoading, error, data: userInfo },
  } = useUsers();

  return (
    <Wrapper>
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
          text="예약내역"
          type="button"
          event={() => navigate(`/reservation/check/${userInfo.uid}`)}
        />
        <Button
          text="회원탈퇴"
          type="button"
          event={() =>
            deleteAccountQuery.mutate(
              {},
              {
                onSuccess: () => {
                  console.log("success");
                },
              }
            )
          }
        />
      </div>
    </Wrapper>
  );
}
