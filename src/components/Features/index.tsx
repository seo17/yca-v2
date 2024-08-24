"use client";

import { features } from "@/lib";
import React from "react";
import FeatureItem from "../FeatureItem";
import AnimatedDiv from "../AnimatedDiv";

function Features() {
  return (
    <section id={"features"}>
      <div className="w-full pt-20 pb-40">
        <div className="max-w-[1080px] flex flex-col items-center justify-start  gap-40 md:px-7 lg:px-10">
          {features.map((item, index) => (
            <AnimatedDiv animateOption={"appear"}>
              <FeatureItem key={index} item={item} />
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
