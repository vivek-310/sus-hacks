import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-[22px] font-normal",
  s: "text-lg font-normal",
  "2xl": "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  "3xl": "text-[32px] font-light md:text-3xl sm:text-[28px]",
  "4xl": "text-[100px] font-medium md:text-5xl",
  xl: "text-2xl font-normal md:text-[22px]",
  md: "text-xl font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-worksans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
