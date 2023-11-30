import React from "react";

export default function AttractionFirstDepth({ select, setSelect }) {
  return (
    <nav className="xl:p-0 md:text-base sm:flex-row flex flex-col gap-2 text-sm text-white p-5">
      <button
        onClick={() =>
          setSelect({ firstDepth: "history", secondDepth: "palace" })
        }
        className={`border border-black border-opacity-60 basis-1/2 py-5 text-black hover:bg-black hover:bg-opacity-60 hover:text-white transition-all ${
          select.firstDepth === "history" && "bg-black bg-opacity-60 text-white"
        }`}
      >
        역사 주요명소
      </button>
      <button
        onClick={() =>
          setSelect({ firstDepth: "culture", secondDepth: "experience" })
        }
        className={`border border-black border-opacity-60 basis-1/2 py-5 text-black hover:bg-black hover:bg-opacity-60 hover:text-white transition-all ${
          select.firstDepth === "culture" && "bg-black bg-opacity-60 text-white"
        }`}
      >
        문화 주요명소
      </button>
    </nav>
  );
}
