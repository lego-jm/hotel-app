import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminUserCard({
  user,
  user: { email, enNameFt, enNameLt, createdDate, uid },
  offset,
  length,
  no,
}) {
  const navigate = useNavigate();
  return (
    <li className="flex justify-between text-center">
      <span className="basis-1/6">{length - offset - no}</span>
      <span className="basis-2/6">{email}</span>
      <span className="basis-1/6">
        {enNameFt} {enNameLt}
      </span>
      <span className="basis-1/6">{createdDate}</span>
      <span
        className="basis-1/6 cursor-pointer"
        onClick={() => navigate(`/admin/users/${uid}`, { state: { user } })}
      >
        상세보기
      </span>
    </li>
  );
}
