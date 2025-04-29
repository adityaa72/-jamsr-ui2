import { ComponentPropsWithoutRef } from "react";

export type UIProps<ElementType extends React.ElementType> = Omit<
  ComponentPropsWithoutRef<ElementType>,
  "className" | "defaultChecked" | "color" | "defaultValue"
> & {
  className?: string;
  render?: React.ReactElement;
};
