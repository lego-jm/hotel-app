import React from "react";

export default function Wrapper({ children, custom }) {
  return (
    <section className={`md:my-40 my-28 max-w-7xl mx-auto ${custom}`}>
      {children}
    </section>
  );
}
