import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    gray_300: "bg-gray-300",
    deep_purple_50: "bg-deep_purple-50 text-blue_gray-900",
  },
};
const sizes = {
  md: "h-[32px] px-2",
  xl: "h-[48px] px-[18px]",
  lg: "h-[32px] px-3 text-base",
  sm: "h-[25px] px-2.5 text-[13px]",
  xs: "h-[24px] px-1.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "deep_purple_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["md", "xl", "lg", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_300", "deep_purple_50"]),
};

export { Button };
