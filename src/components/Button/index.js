import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder40: "rounded-radius40",
  RoundedBorder52: "rounded-radius52",
  RoundedBorder24: "rounded-radius24",
};
const variants = {
  FillGreen500: "bg-green_500 text-white_A700",
  FillDeeporangeA700: "bg-deep_orange_A700 text-white_A700",
  OutlineBlack900:
    "bg-light_blue_200 border border-black_900 border-solid text-gray_900",
  FillGray900: "bg-gray_900 text-gray_50",
};
const sizes = {
  sm: "pr-[17px] py-[17px]",
  md: "p-[20px]",
  lg: "p-[23px] sm:px-[20px]",
  xl: "sm:px-[20px] px-[25px] py-[27px]",
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
  shape: PropTypes.oneOf([
    "RoundedBorder40",
    "RoundedBorder52",
    "RoundedBorder24",
  ]),
  variant: PropTypes.oneOf([
    "FillGreen500",
    "FillDeeporangeA700",
    "OutlineBlack900",
    "FillGray900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder24",
  variant: "FillGreen500",
  size: "lg",
};

export { Button };
