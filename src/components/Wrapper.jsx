import React from "react";

export default function Wrapper({ children, custom }) {
  return (
    <section className={`md:my-14 my-10 max-w-7xl mx-auto ${custom}`}>
      {children}
    </section>
  );
}
