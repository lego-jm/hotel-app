import React from "react";
import Button from "../components/ui/Button";
import MyPageInfo from "../components/mypage/MyPageInfo";
import MyPageUse from "../components/mypage/MyPageUse";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import confirm from "../components/Confirm";
import Loading from "../components/Loading";

export default function MyPage() {
  const navigate = useNavigate();
  const {
    deleteAccountQuery,
    getUserInfoQuery: { isLoading, error, data: userInfo },
  } = useUsers();

  const handleRemoveAccount = () => {
    confirm(`회원탈퇴를 진행하시겠습니까?\n탈퇴 후 되돌릴 수 없습니다.`, () =>
      deleteAccountQuery.mutate(
        {},
        {
          onSuccess: () => {
            window.alert("그동안 저희 리얼호텔을 이용해주셔서 감사합니다.");
          },
        }
      )
    );
  };

  if (isLoading) return <Loading />;

  return (
    <Wrapper custom="pt-9">
      <h2 className="text-4xl text-center border-b-2 py-10 border-black">
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
        <Button text="회원탈퇴" type="button" event={handleRemoveAccount} />
      </div>
    </Wrapper>
  );
}
