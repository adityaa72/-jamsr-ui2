import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;
export const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props;
  return (
    <button
      className="text-white px-4 py-2 bg-purple-500 rounded-full"
      {...restProps}
    >
      {children}
    </button>
  );
};
