import React from "react";
import Warning from "./Warning";
import Button from "../ui/Button";
import { useUsers } from "../../hooks/useUsers";

export default function PassWordUpdate() {
  const { updatePassWordSendQuery } = useUsers();
  const handleClick = () => {
    updatePassWordSendQuery.mutate(
      {},
      {
        onSuccess: () => {
          window.alert("등록하신 이메일로 재설정 메일을 보냈습니다.");
        },
      }
    );
  };

  return (
    <div className="md:w-8/12 flex flex-col gap-3 items-start border-t border-gray-200 pt-5">
      <p>비밀번호 재설정</p>
      <Button text="비밀번호 재설정 하기" type="button" event={handleClick} />
      <Warning text="비밀번호를 재설정하려면 위 버튼을 클릭해주세요." />
    </div>
  );
}
