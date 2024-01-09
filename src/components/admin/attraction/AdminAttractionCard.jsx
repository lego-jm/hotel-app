import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAttractionCard({
  attraction,
  attraction: { title, firstCategory, createdDate, no },
  offset,
  length,
  index,
}) {
  const navigate = useNavigate();

  return (
    <li className="flex justify-between text-center py-2">
      <span className="basis-1/6">{length - offset - index}</span>
      <span className="basis-1/6">
        {firstCategory === "culture" && "문화"}
        {firstCategory === "history" && "역사"}
      </span>
      <span className="basis-1/6">{title}</span>
      <span className="basis-2/6">{createdDate}</span>
      <span
        className="basis-1/6 cursor-pointer"
        onClick={() =>
          navigate(`/admin/attraction/${no}`, { state: { attraction } })
        }
      >
        상세보기
      </span>
    </li>
  );
}
