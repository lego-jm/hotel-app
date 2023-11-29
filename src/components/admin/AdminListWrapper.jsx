import React from "react";

export default function AdminListWrapper({ children }) {
  return (
    <section className="max-w-7xl mx-auto">
      <ul className="w-full flex flex-col gap-4 shadow-xl rounded-lg border border-theme-color p-4 mb-5">
        {children}
      </ul>
    </section>
  );
}
