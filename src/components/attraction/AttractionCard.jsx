import React from "react";

export default function AttractionCard({
  attraction: { title, content, imgUrl, moveTime },
  index,
}) {
  return (
    <li className="lg:flex-row flex flex-col p-5 mt-7 pb-12 last:border-none border-b border-gray-300">
      <figure className={`basis-1/2 ${index % 2 === 1 && "lg:order-1"}`}>
        <img className="w-full" src={imgUrl} alt="attraction-img" />
      </figure>
      <section className="lg:gap-7 lg:p-5 flex flex-col gap-4 basis-1/2 px-3">
        <h3 className="lg:mt-0 md:text-2xl text-xl mt-3">{title}</h3>
        <p className="md:text-base text-sm text-footer-font-color">{content}</p>
        {moveTime && (
          <p className="md:text-base text-sm">이동 소요 시간 : {moveTime}</p>
        )}
      </section>
    </li>
  );
}
