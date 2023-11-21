import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminButton({ text, link }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="w-2/12 bg-theme-color rounded-lg py-3 hover:text-white transition-all"
    >
      {text}
    </button>
  );
}
