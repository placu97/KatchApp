import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder40: "rounded-radius40" };
const variants = { FillGreen500: "bg-green_500 text-white_A700" };
const sizes = { sm: "p-[23px] sm:px-[20px]" };

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
  shape: PropTypes.oneOf(["RoundedBorder40"]),
  variant: PropTypes.oneOf(["FillGreen500"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
