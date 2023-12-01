import React, { useState } from "react";
import AttractionSecondDepth from "./AttractionSecondDepth";
import AttractionCard from "./AttractionCard";
import { useAttraction } from "../../hooks/useAttraction";
import Loading from "../Loading";
import AttractionFirstDepth from "./AttractionFirstDepth";

export default function AttractionContents() {
  const [select, setSelect] = useState({
    firstDepth: "history",
    secondDepth: "palace",
  });

  const {
    getAttractionQuery: { isLoading, data: attractions },
  } = useAttraction();

  const filterAttraction = attractions?.filter(
    (attraction) =>
      attraction.category1 === select.firstDepth &&
      attraction.category2 === select.secondDepth
  );

  if (isLoading) return <Loading />;

  return (
    <section className="mt-14">
      <nav className="flex flex-col gap-16">
        <AttractionFirstDepth select={select} setSelect={setSelect} />
        <AttractionSecondDepth select={select} setSelect={setSelect} />
      </nav>
      <ul className="">
        {filterAttraction?.map((attraction, index) => (
          <AttractionCard
            key={attraction.id}
            attraction={attraction}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}
