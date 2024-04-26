import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-tr-[15px] rounded-bl-[15px]",
  square: "rounded-[0px]",
};
const variants = {
  gradient: {
    white_A700_white_A700: "bg-gradient text-black-900",
  },
};
const sizes = {
  xs: "h-[43px] text-lg",
  md: "h-[57px] px-[35px] text-lg",
  sm: "h-[48px] px-5 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "md",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer capitalize ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "md", "sm"]),
  variant: PropTypes.oneOf(["gradient"]),
  color: PropTypes.oneOf(["white_A700_white_A700"]),
};

export { Button };
