"use client";

import { CircleCheck } from "lucide-react";
import React from "react";
import Button from "../Button";

function PriceCard({
  details,
}: {
  details: {
    tier: string;
    price: string;
    description: string;
    features: string[];
  };
}) {
  return (
    <div className="max-[300px]:w-full max-[300px]:h-[580px] w-[280px] h-[480px] rounded-lg border border-border bg-foreground">
      <div className="w-full h-full flex flex-col justify-between items-center p-4 text-primary-dark">
        <div className="w-full flex-flex gap-[18px]">
          <div className="w-full flex flex-col gap-1">
            <p className="text-base">{details.tier}</p>

            <p className="text-3xl font-bold">{`$${details.price}/m`}</p>

            <p className="text-[14px] text-copy-light">{details.description}</p>
          </div>

          <hr className="bg-copy-lighter h-px border-0 w-full my-2" />

          <div className="flex flex-col w-full gap-[14px]">
            {details.features.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-row flex-nowrap justify-start items-center max-[300px]:gap-0 gap-1"
              >
                <div>
                  <CircleCheck size={16} />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <Button
          className="w-full"
          styleOption={details.tier !== "Basic" ? "border" : "default"}
        />
      </div>
    </div>
  );
}

export default PriceCard;
