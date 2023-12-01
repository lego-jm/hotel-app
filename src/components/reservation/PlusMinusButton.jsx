import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function PlusMinusButton({ people, setPeople }) {
  const handleIncrement = () => {
    if (people > 2) return;
    setPeople(people + 1);
  };
  const handleDecrement = () => {
    if (people < 2) return;
    setPeople(people - 1);
  };

  return (
    <div className="flex gap-3">
      <h3>숙박인원</h3>
      <div className="flex items-center border border-gray-500 rounded-md basis-2/12 shrink-0">
        <button
          onClick={handleDecrement}
          className="border-r border-gray-500 p-1"
        >
          <FaMinus />
        </button>
        <span className="w-full text-center text-xs px-3">{people}</span>
        <button
          onClick={handleIncrement}
          className="border-l border-gray-500 p-1"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
