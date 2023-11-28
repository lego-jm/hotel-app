import React from "react";

export default function Wrapper({ children, custom }) {
  return (
    <section className={`max-w-7xl mx-auto my-40 ${custom}`}>
      {children}
    </section>
  );
}
