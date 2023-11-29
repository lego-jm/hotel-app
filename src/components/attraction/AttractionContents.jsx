import React from "react";
import AttractionNav from "./AttractionNav";
import AttractionCard from "./AttractionCard";

export default function AttractionContents() {
  return (
    <section className="mt-14">
      <AttractionNav />
      <AttractionCard />
      <AttractionCard />
      <AttractionCard />
      <AttractionCard />
    </section>
  );
}
