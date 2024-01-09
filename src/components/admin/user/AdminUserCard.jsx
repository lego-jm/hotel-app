import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminUserCard({
  user,
  user: { email, firstName, lastName, createdDate, no },
  offset,
  length,
  index,
}) {
  const navigate = useNavigate();
  return (
    <li className="flex justify-between text-center">
      <span className="basis-1/6">{length - offset - index}</span>
      <span className="basis-2/6">{email}</span>
      <span className="basis-1/6">
        {firstName} {lastName}
      </span>
      <span className="basis-1/6">{createdDate}</span>
      <span
        className="basis-1/6 cursor-pointer"
        onClick={() => navigate(`/admin/users/${no}`, { state: { user } })}
      >
        상세보기
      </span>
    </li>
  );
}
