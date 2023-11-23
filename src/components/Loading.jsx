import React from "react";
import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Triangle
        height="150"
        width="150"
        color="rgba(173,158,135,.97)"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </section>
  );
}
