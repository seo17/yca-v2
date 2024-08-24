"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

function AnimatedDiv({
  key,
  children,
  animateOption,
}: {
  key: number;
  children: JSX.Element;
  animateOption: "appear" | "toTop";
}) {
  const ref = useRef(null);

  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const variants = {
    appearInitial: { opacity: 0 },
    toTopInitial: { opacity: 0, y: 20 },
    appearAnimate: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
    toTopAnimate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  };

  useEffect(() => {
    if (isInView && animateOption === "appear") controls.start("appearAnimate");
    else if (isInView && animateOption === "toTop")
      controls.start("toTopAnimate");
  }, [controls, isInView, animateOption]);

  return (
    <motion.div
      key={key}
      ref={ref}
      variants={variants}
      initial={"appearInitial"}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedDiv;
