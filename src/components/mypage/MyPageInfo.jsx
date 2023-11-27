import React from "react";

export default function MyPageInfo({ user }) {
  return (
    <div className="bg-gray-200 basis-1/2 flex flex-col justify-center gap-2">
      <h3 className="text-xl text-gray-400">성명</h3>
      <p className="text-2xl text-theme-color">
        <span className="mr-3">{user?.enNameFt}</span>
        {user?.enNameLt}
      </p>
      <h3 className="text-xl text-gray-400">국가</h3>
      <p className="text-2xl text-theme-color">{user?.nation}</p>
    </div>
  );
}
