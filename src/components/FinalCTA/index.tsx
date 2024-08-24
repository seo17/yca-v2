"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";

function FinalCTA() {
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
        whileInView="show"
        className="w-full flex flex-col items-center justify-center px-5 pb-20 gap-10"
      >
        <div className="flex flex-col items-center justify-center sm:gap-2">
          <motion.div variants={toRightVariant} className="w-fit">
            <h1 className="text-3xl md:text-[2.625rem] lg:text-7xl font-bold text-primary-dark text-center">
              Ready to Transform Your
            </h1>
          </motion.div>
          <motion.div variants={toLeftVariant} className="w-fit">
            <h1 className="text-3xl md:text-[2.625rem] lg:text-7xl font-bold text-primary-dark text-center">
              YouTube Strategy?
            </h1>
          </motion.div>
          <motion.div
            variants={toTopVariant}
            className="w-full sm:w-[70%] md:w-[55%]"
          >
            <p className="text-center text-base text-secondary-content">
              Sign up for YCA today and unlock the full potential of your
              YouTube comments.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={toTopVariant}
          className="w-full flex flex-row items-center justify-center"
        >
          <Button />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FinalCTA;
