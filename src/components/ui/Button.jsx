import clsx from "clsx";
import React from "react";

const Button = ({
  type,
  label,
  size = "md",
  variant = "solid",
  handleClick = () => {},
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(
        "shadow font-semibold transition-colors cursor-pointer",
        className,
        {
          "bg-accent text-white hover:bg-accent/70": variant === "solid",
          "bg-transparent text-[#361736] hover:bg-accent/10":
            variant === "outline",
          "text-xs py-1.5 px-3": size === "sm",
          "text-sm py-2 px-4": size === "md",
          "text-base py-2.5 px-6": size === "lg",
        },
      )}
    >
      {label}
    </button>
  );
};

export default Button;
