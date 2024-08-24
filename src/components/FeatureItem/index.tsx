import React from "react";
import Button from "../Button";

function FeatureItem({
  key,
  item,
}: {
  key: number;
  item: {
    title: string;
    description: string;
    image: JSX.Element | string;
    reverse: boolean;
  };
}) {
  return (
    <article>
      <div
        key={key}
        className={`flex flex-col-reverse ${
          item.reverse ? "md:flex-row-reverse" : "md:flex-row"
        } flex-nowrap justify-between items-center`}
      >
        <div className="w-[65%] flex flex-col items-center md:items-start gap-5">
          <div className="flex flex-col items-center md:items-start gap-2 text-primary-dark">
            <h3 className="text-2xl md:text-[42px] font-semibold ">
              {item.title}
            </h3>
            <p className="text-base text-center md:text-start md:text-[18px]">
              {item.description}
            </p>
          </div>

          <Button />
        </div>

        <div className="w-[25%]">{item.image}</div>
      </div>
    </article>
  );
}

export default FeatureItem;
