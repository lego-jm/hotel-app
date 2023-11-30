import React from "react";

export default function ContentIntro({ title, text }) {
  return (
    <section className="xl:pb-14 max-w-7xl text-center p-5 mx-auto">
      <h3 className="md:text-4xl text-3xl">{title}</h3>
      <p className="md:text-md text-sm text-gray-500 mt-7">{text}</p>
    </section>
  );
}
