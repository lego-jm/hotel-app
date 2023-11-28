import React from "react";

export default function Pagination({ page, total, limit, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <nav className="flex justify-center gap-2 text-xs">
      <button
        onClick={() => setPage(page - 1)}
        className="p-2 px-3 bg-theme-color rounded-full"
        disabled={page === 1}
      >
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i}
            className={`p-2 px-3 bg-theme-color rounded-full hover:text-white transition-all duration-300 ${
              page === i + 1 ? "text-white" : ""
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      <button
        onClick={() => setPage(page + 1)}
        className="p-2 px-3 bg-theme-color rounded-full"
        disabled={page === numPages}
      >
        &gt;
      </button>
    </nav>
  );
}
