import React from "react";

const sizeClasses = {
  txtInterRegular14Black900: "font-inter font-normal",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtSourceSansProLight14: "font-light font-sourcesanspro",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold16Gray800: "font-inter font-semibold",
  txtInterBold24: "font-bold font-inter",
  txtSourceSansProRegular14: "font-normal font-sourcesanspro",
  txtInterRegular18Black900: "font-inter font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterSemiBold16Lightgreen900: "font-inter font-semibold",
  txtInterRegular18: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
