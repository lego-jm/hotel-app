import React from "react";

export default function AdminButton({ text, type, event }) {
  return (
    <button
      onClick={event}
      type={type}
      className="w-2/12 bg-theme-color rounded-lg py-3 hover:text-white transition-all"
    >
      {text}
    </button>
  );
}
