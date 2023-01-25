import React from "react";
const variantClasses = {
  h1: "font-normal sm:text-[40px] md:text-[46px] text-[50px]",
  h2: "sm:text-[26px] md:text-[28px] text-[30px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
