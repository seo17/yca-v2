"use client";

import { mobileNavItems } from "@/lib";
import Link from "next/link";
import React, { useState } from "react";

import { motion, useAnimationControls } from "framer-motion";

function MobileNavButton() {
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimationControls();
  const menuVariants = {
    initial: { opacity: 0, x: -10 },
    onOpen: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, ease: "easeInOut" },
    },
    onClose: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.35, ease: "easeInOut" },
    },
  };
  const buttonTextVariants = {
    initial: {
      opacity: 1,
    },
    onOpen: {
      opacity: [0, 0.65, 0, 0, 1],
      x: [0, 50, 100, -50, 0],
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
    onClose: {
      opacity: [0, 0.65, 0, 0, 1],
      x: [0, -50, -100, 50, 0],
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  const handleClick = async () => {
    if (!isOpen) {
      await controls.start("onOpen");
      setIsOpen(!isOpen);
    } else {
      await controls.start("onClose");
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative md:hidden">
      <button
        onClick={handleClick}
        className="font-bold py-2 px-4 bg-primary-dark text-foreground rounded-lg active:bg-primary"
      >
        <motion.div
          variants={buttonTextVariants}
          animate={controls}
          initial="initial"
        >
          {isOpen ? "Close" : "Menu"}
        </motion.div>
      </button>
      <motion.div
        variants={menuVariants}
        initial={"initial"}
        animate={controls}
        className="absolute bg-primary-dark rounded-lg w-[220px] -bottom-[190px] right-3"
      >
        <div className="flex flex-col justify-start p-4 gap-4">
          {mobileNavItems.map((item, index) => (
            <div
              key={index}
              className="text-[14-px] text-foreground hover:underline"
            >
              <Link href={item.path}>{item.label}</Link>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default MobileNavButton;
