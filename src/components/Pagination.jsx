import React from "react";

export default function Pagination({ page, total, limit, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <nav className="flex justify-center gap-2">
      <button
        onClick={() => setPage(page - 1)}
        className="w-10 p-2 bg-theme-color rounded-full hover:text-white transition-all duration-300"
        disabled={page === 1}
      >
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className={`w-10  p-2 bg-theme-color rounded-full hover:text-white transition-all duration-300 ${
              page === i + 1 ? "text-white" : ""
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      <button
        onClick={() => setPage(page + 1)}
        className="w-10 p-2 bg-theme-color rounded-full hover:text-white transition-all duration-300"
        disabled={page === numPages}
      >
        &gt;
      </button>
    </nav>
  );
}
