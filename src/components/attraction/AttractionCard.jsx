import React from "react";

export default function AttractionCard({
  attraction: { title, content, imgUrl, movetime },
  index,
}) {
  return (
    <section className="flex p-5 mt-7 pb-12 last:border-none border-b border-gray-300">
      <figure className={`basis-1/2 ${index % 2 === 1 && "order-1"}`}>
        <img className="w-full" src={imgUrl} alt="attraction-img" />
      </figure>
      <section className="flex flex-col gap-7 basis-1/2 p-5">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-md text-footer-font-color">{content}</p>
        {movetime && <p>이동 소요 시간 : {movetime}</p>}
      </section>
    </section>
  );
}
