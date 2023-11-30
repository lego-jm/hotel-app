import React from "react";

export default function Button({ text, type, event, custom }) {
  return (
    <button
      onClick={event}
      type={type}
      className={`sm:text-base text-sm bg-theme-color py-2 px-5 hover:text-white transition-all ${custom}`}
    >
      {text}
    </button>
  );
}
