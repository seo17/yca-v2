"use client";

import Link from "next/link";
import React, { useState } from "react";

import { motion, useAnimationControls } from "framer-motion";
import { mobileNavItems } from "@/lib";

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
      opacity: [0, 0, 0, 0, 1],
      x: [0, 50, 100, -25, 0],
      transition: {
        duration: 0.38,
        ease: "easeInOut",
      },
    },
    onClose: {
      opacity: [0, 0, 0, 0, 1],
      x: [0, -50, -100, 25, 0],
      transition: {
        duration: 0.38,
        ease: "easeInOut",
      },
    },
  };

  const handleClick = async () => {
    if (!isOpen) {
      setIsOpen(!isOpen);
      await controls.start("onOpen");
    } else {
      setIsOpen(!isOpen);
      await controls.start("onClose");
    }
  };

  return (
    <div className="relative">
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
        className="absolute bg-primary-dark rounded-lg w-[220px] bottom-[-230px] right-3"
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
