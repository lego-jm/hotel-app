import React from "react";
import Button from "../components/ui/Button";
import MyPageInfo from "../components/mypage/MyPageInfo";
import MyPageUse from "../components/mypage/MyPageUse";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Loading from "../components/Loading";
import ReservationList from "../components/reservation/ReservationList";

export default function MyPage() {
  const navigate = useNavigate();
  const {
    deleteAccountQuery,
    getUserInfoQuery: { isLoading, data: userInfo },
  } = useUsers();

  const handleRemoveAccount = () => {
    if (
      window.confirm(
        `회원탈퇴를 진행하시겠습니까?\n탈퇴 후 되돌릴 수 없습니다.`
      )
    ) {
      deleteAccountQuery.mutate(userInfo.no, {
        onSuccess: () => {
          window.alert("그동안 저희 리얼호텔을 이용해주셔서 감사합니다.");
          localStorage.removeItem("user-token");
          navigate("/");
        },
      });
    }
  };

  if (isLoading) return <Loading />;

  return (
    <Wrapper custom="mb-10">
      <h2 className="md:text-4xl text-3xl text-center border-b-2 py-10 border-black">
        나의 정보
      </h2>
      <section className="md:flex-row flex flex-col gap-10 mt-10 text-center">
        <MyPageInfo user={userInfo} />
        <MyPageUse />
      </section>
      <section className="my-10">
        <h3 className="md:text-3xl text-2xl pl-2">최근 1개월 예약</h3>
        <ReservationList isMypage />
      </section>
      <section className="md:p-0 md:flex-row flex flex-col gap-5 mt-3 p-3">
        <Button
          text="회원정보"
          type="button"
          event={() => navigate(`/mypage/info`, { state: { userInfo } })}
        />
        <Button
          text="예약상세조회"
          type="button"
          event={() => navigate("/reservation/check/")}
        />
        <Button text="회원탈퇴" type="button" event={handleRemoveAccount} />
      </section>
    </Wrapper>
  );
}
