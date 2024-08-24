import React from "react";

function Button({
  className,
  styleOption,
}: {
  className?: string;
  styleOption?: "default" | "border";
}) {
  const styleOptions = {
    default: "bg-primary-dark text-foreground hover:bg-primary",
    border:
      "bg-foreground text-primary-dark border border-primary-dark hover:bg-primary-dark hover:text-foreground",
  };

  const style = styleOption ? styleOptions[styleOption] : styleOptions.default;

  return (
    <button
      className={`${className} py-3 px-10 text-[14px]  rounded-lg ${style}`}
    >
      Get Started
    </button>
  );
}

export default Button;
