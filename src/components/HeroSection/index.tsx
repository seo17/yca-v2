"use client";
import React from "react";

import { motion } from "framer-motion";

function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 1, delayChildren: 0.3 },
    },
  };
  const toRightVariant = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  };

  const toLeftVariant = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  };

  const toTopVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  };

  return (
    <section id="Hero">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col items-center justify-center px-5 py-20 gap-10"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.div variants={toRightVariant} className="w-fit">
            <h1 className="text-3xl md:text-[2.625rem] lg:text-7xl font-bold text-primary-dark text-center">
              YCA: Unlock the Power of
            </h1>
          </motion.div>
          <motion.div variants={toLeftVariant} className="w-fit">
            <h1 className="text-3xl md:text-[2.625rem] lg:text-7xl font-bold text-primary-dark text-center">
              YouTube Comments
            </h1>
          </motion.div>
          <motion.div
            variants={toTopVariant}
            className="w-full sm:w-[70%] md:w-[55%]"
          >
            <p className="text-center text-base text-secondary-content">
              Are you drowning in a sea of YouTube comments, struggling to make
              sense of your audience's feedback? Say hello to{" "}
              <span className="font-bold">
                YCA - Your YouTube Comment Analyzer!
              </span>
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={toTopVariant}
          className=" rounded-2xl w-full sm:w-[75%] md:w-[80%] lg:w-[800px] lg:h-[486px]"
        >
          <img
            className="object-cover w-full h-full rounded-2xl"
            src="/demo.png"
            alt="YCA demo image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
