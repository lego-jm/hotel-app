import React from "react";

export default function AttractionNav() {
  return (
    <nav className="flex">
      <button className="basis-1/3 p-3 border border-gray-300 border-b-0">
        고궁
      </button>
      <button className="basis-1/3 p-3 border border-gray-300">한옥마을</button>
      <button className="basis-1/3 p-3 border border-gray-300">박물관</button>
    </nav>
  );
}
