import React from "react";
import { useNavigate } from "react-router-dom";
import { useRooms } from "../../hooks/useRooms";

export default function AdminButton({ text, link, id, type }) {
  const navigate = useNavigate();
  const { removeRoomQuery } = useRooms();
  const handleClick = () => {
    if (text === "객실 삭제") {
      if (window.confirm("객실을 삭제하시겠습니까?")) {
        removeRoomQuery.mutate(id, {
          onSuccess: () => {
            console.log("success");
          },
        });
      }
    }

    navigate(link);
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className="w-2/12 bg-theme-color rounded-lg py-3 hover:text-white transition-all"
    >
      {text}
    </button>
  );
}
