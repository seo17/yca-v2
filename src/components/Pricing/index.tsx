"use client";

import { pricing } from "@/lib";
import React from "react";
import PriceCard from "../PriceCard";

import { motion } from "framer-motion";
import AnimatedDiv from "../AnimatedDiv";

function Pricing() {
  return (
    <section id={"Pricing"}>
      <div className="w-full pb-40">
        <div className="flex flex-col">
          <div className="max-w-[1080px] flex flex-col items-center justify-start  gap-10 px-5 md:px-7 lg:px-10">
            {/* Pricing Header */}
            <div className="text-primary flex flex-col items-center gap-3">
              <h3 className="text-2xl md:text-[42px] font-semibold ">
                Pricing
              </h3>

              <div className="md:w-[55%]">
                <p className="text-base text-center  md:text-[18px]">
                  Choose the plan that's right for you with our clear,
                  competitive pricing. Perfect for individuals and businesses
                  alike.
                </p>
              </div>
            </div>

            {/* Prices */}
            <motion.div className="flex flex-col lg:flex-row justify-center items-center gap-5">
              {pricing.map((item) => (
                <AnimatedDiv animateOption="toTop">
                  <PriceCard details={item} />
                </AnimatedDiv>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
