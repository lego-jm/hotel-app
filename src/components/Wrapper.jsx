import React from "react";

export default function Wrapper({ children, custom }) {
  return (
    <section className={`max-w-7xl pb-9 mx-auto my-40 ${custom}`}>
      {children}
    </section>
  );
}
