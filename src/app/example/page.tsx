"use client";

import { motion } from "framer-motion";

export default function Example() {
  const container = {
    hidden: { rotate: 90 },
    show: {
      rotate: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
  };

  const itemB = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 80 },
  };

  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundColor: "#fff",
        position: "relative",
      }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className={`${blobStyle} left-[30px]`} variants={itemA} />
      <motion.div className={`${blobStyle} left-[80px]`} variants={itemA} />
      <motion.div className={`${blobStyle} left-[30px]`} variants={itemB} />
      <motion.div className={`${blobStyle} left-[80px]`} variants={itemB} />
    </motion.div>
  );
}

const blobStyle = "w-[40px] h-[40px] rounded-[75px] bg-[#1d1ef0] absolute";
