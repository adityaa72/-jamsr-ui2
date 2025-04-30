import { ComponentPropsWithRef } from "react";

export type UIProps<ElementType extends React.ElementType> = Omit<
  ComponentPropsWithRef<ElementType>,
  "className" | "defaultChecked" | "color" | "defaultValue"
> & {
  className?: string;
  render?: React.ReactElement;
};
