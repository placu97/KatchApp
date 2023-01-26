import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h2: "font-semibold sm:text-[36px] md:text-[38px] text-[40px]",
  h3: "font-normal sm:text-[26px] md:text-[28px] text-[30px]",
  h4: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "font-normal text-[18px]",
  h6: "font-normal text-[16px]",
  body1: "font-normal text-[14px]",
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
