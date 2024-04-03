import React from "react";

const sizes = {
  xs: "text-[13px] font-normal",
  lg: "text-2xl font-medium md:text-[22px]",
  s: "text-sm font-medium",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
