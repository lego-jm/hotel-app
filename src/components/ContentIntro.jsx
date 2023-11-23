import React from "react";

export default function ContentIntro({ title, text }) {
  return (
    <section className="max-w-7xl text-center pb-14 mx-auto">
      <h3 className="text-4xl">{title}</h3>
      <p className="text-md text-gray-500 mt-7">{text}</p>
    </section>
  );
}
