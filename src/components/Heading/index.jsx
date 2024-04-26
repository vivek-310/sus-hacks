import React from "react";

const sizes = {
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  xs: "text-lg font-bold",
  lg: "text-[64px] font-semibold md:text-5xl",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-oxanium ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
