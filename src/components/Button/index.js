import React from "react";
import PropTypes from "prop-types";

const variants = { FillIndigoA700: "bg-indigo_A700 text-black_900" };
const sizes = { sm: "p-[14px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } `}
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
  variant: PropTypes.oneOf(["FillIndigoA700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = { className: "", variant: "", size: "" };

export { Button };
