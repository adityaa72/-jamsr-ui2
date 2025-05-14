import type { ComponentPropsWithRef } from "react";

type DataAttributes = Record<`data-${string}`, string | undefined>;

export type UIProps<ElementType extends React.ElementType> = Omit<
  ComponentPropsWithRef<ElementType>,
  "className" | "defaultChecked" | "color" | "defaultValue"
> &
  DataAttributes & {
    className?: string;
    render?: React.ReactElement;
  };

export type PropGetter<P = Record<string, unknown>> = (props: P) => P;

export type SlotsToClassNames<S extends string> = {
  [key in S]?: string;
};
