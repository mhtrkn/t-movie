import { ButtonProps } from "@/utils/type";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Button = ({
  apperance,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "py-[0.9063rem] outline-none px-[1.4063rem] cursor-pointer rounded-lg flex items-center justify-center font-medium text-base transition-all duration-300",
        apperance === "outlined"
          ? "border border-white text-white hover:bg-white hover:bg-opacity-15"
          : "border border-primary bg-primary text-black-200 hover:bg-opacity-85",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
