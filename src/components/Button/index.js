import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder40: "rounded-radius40",
  RoundedBorder52: "rounded-radius52",
};
const variants = {
  FillGreen500: "bg-green_500 text-white_A700",
  FillDeeporangeA700: "bg-deep_orange_A700 text-white_A700",
};
const sizes = {
  sm: "p-[23px] sm:px-[20px]",
  md: "sm:px-[20px] px-[25px] py-[27px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf(["RoundedBorder40", "RoundedBorder52"]),
  variant: PropTypes.oneOf(["FillGreen500", "FillDeeporangeA700"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
