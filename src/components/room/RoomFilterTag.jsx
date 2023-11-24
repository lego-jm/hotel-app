import React from "react";

export default function RoomFilterTag({ filterItem, select, filter }) {
  return (
    <li className="text-xs">
      <button
        onClick={() => select(filterItem)}
        className={`bg-theme-color p-3 rounded-lg hover:text-white transition-all duration-300 ${
          filter === filterItem ? "text-white" : ""
        }`}
      >
        {filterItem}
      </button>
    </li>
  );
}
