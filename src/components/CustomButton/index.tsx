"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Button({
  prompt,
  className,
  styleOption,
  onClick,
}: {
  prompt?: string;
  className?: string;
  styleOption?: "default" | "border";
  onClick?: () => void;
}) {
  const router = useRouter();

  const styleOptions = {
    default: "bg-primary-dark text-foreground hover:bg-primary",
    border:
      "bg-foreground text-primary-dark border border-primary-dark hover:bg-primary-dark hover:text-foreground",
  };

  const style = styleOption ? styleOptions[styleOption] : styleOptions.default;

  const defaultHandleClick = () => {
    router.push("/sign-up");
  };

  return (
    <button
      onClick={onClick || defaultHandleClick}
      className={`${className} py-3 px-10 text-[14px]  rounded-lg ${style}`}
    >
      {prompt || "Get Started"}
    </button>
  );
}

export default Button;
