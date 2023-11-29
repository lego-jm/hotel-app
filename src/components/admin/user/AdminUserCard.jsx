import React from "react";

export default function AdminUserCard({
  content: { email, enNameFt, enNameLt, createdDate },
  offset,
  length,
  no,
}) {
  return (
    <li className="flex justify-between text-center">
      <span className="basis-1/6">{length - offset - no}</span>
      <span className="basis-2/6">{email}</span>
      <span className="basis-1/6">
        {enNameFt} {enNameLt}
      </span>
      <span className="basis-1/6">{createdDate}</span>
      <span className="basis-1/6">상세보기</span>
    </li>
  );
}
