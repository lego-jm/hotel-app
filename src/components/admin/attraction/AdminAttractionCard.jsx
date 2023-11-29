import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAttractionCard({
  attraction,
  attraction: { title, category1, createdDate, id },
  offset,
  length,
  no,
}) {
  const navigate = useNavigate();

  return (
    <li className="flex justify-between text-center py-2">
      <span className="basis-1/6">{length - offset - no}</span>
      <span className="basis-1/6">{category1}</span>
      <span className="basis-1/6">{title}</span>
      <span className="basis-2/6">{createdDate}</span>
      <span
        className="basis-1/6 cursor-pointer"
        onClick={() =>
          navigate(`/admin/attraction/${id}`, { state: { attraction } })
        }
      >
        상세보기
      </span>
    </li>
  );
}
