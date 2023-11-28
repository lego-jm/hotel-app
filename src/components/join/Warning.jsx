import React from "react";
import { PiWarningCircleLight } from "react-icons/pi";

export default function Warning({ text }) {
  return (
    <p className="w-8/12 flex items-center gap-1 text-xs font-light text-yellow-700 bg-yellow-100 p-4 border border-yellow-700 ">
      <PiWarningCircleLight className="text-xl font-bold" />
      {text}
    </p>
  );
}
