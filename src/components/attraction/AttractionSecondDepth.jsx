import React from "react";

export default function AttractionSecondDepth({ select, setSelect }) {
  return (
    <nav className="xl:p-0 sm:flex-row sm:gap-y-0 flex flex-col gap-y-3 p-5">
      <button
        onClick={() =>
          setSelect((preSelect) => ({
            ...preSelect,
            secondDepth:
              select.firstDepth === "history" ? "palace" : "experience",
          }))
        }
        className={`basis-1/3 p-3 border border-gray-300 ${
          select.secondDepth === "palace" || select.secondDepth === "experience"
            ? "sm:border-b-0"
            : ""
        } `}
      >
        {select.firstDepth === "history" ? "고궁" : "체험"}
      </button>
      <button
        onClick={() =>
          setSelect((preSelect) => ({
            ...preSelect,
            secondDepth: select.firstDepth === "history" ? "hanok" : "shopping",
          }))
        }
        className={`basis-1/3 p-3 border border-gray-300 ${
          select.secondDepth === "hanok" || select.secondDepth === "shopping"
            ? "sm:border-b-0"
            : ""
        } `}
      >
        {select.firstDepth === "history" ? "한옥마을" : "쇼핑"}
      </button>
      <button
        onClick={() =>
          setSelect((preSelect) => ({
            ...preSelect,
            secondDepth: select.firstDepth === "history" ? "museum" : "show",
          }))
        }
        className={`basis-1/3 p-3 border border-gray-300 ${
          select.secondDepth === "museum" || select.secondDepth === "show"
            ? "sm:border-b-0"
            : ""
        } `}
      >
        {select.firstDepth === "history" ? "박물관" : "공연"}
      </button>
    </nav>
  );
}
