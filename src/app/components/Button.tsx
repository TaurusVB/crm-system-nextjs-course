"use client";

import { FC } from "react";

import { cn } from "@/lib/utils";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({ disabled, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(
        "py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded",
        !disabled && "hover:bg-gray-800 active:bg-gray-950",
        disabled && "text-zinc-100"
      )}
    />
  );
};

export default Button;
