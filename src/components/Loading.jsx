import React from "react";
import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <section className="bg-black bg-opacity-80 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center z-10 gap-7">
      <PulseLoader
        color="rgba(173,158,135,.97)"
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className="flex flex-col justify-center items-center gap-3">
        <img className="w-10" src="/images/logo.png" alt="" />
        <h3 className="text-theme-color text-sm font-semibold">RealHotel</h3>
      </div>
    </section>
  );
}
