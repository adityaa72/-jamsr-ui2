import type { ComponentPropsWithRef } from "react";

export type DataAttributes = Record<
  `data-${string}`,
  string | boolean | undefined
>;

export type UIProps<ElementType extends React.ElementType> = Omit<
  ComponentPropsWithRef<ElementType>,
  "className" | "defaultChecked" | "color" | "defaultValue" | "size" | "slot"
> &
  DataAttributes & {
    className?: string;
    render?: React.ReactElement;
  };

export type PropGetter<P = Record<string, unknown>> = (props: P) => P;

export type SlotsToClassNames<S extends string> = {
  [key in S]?: string;
};

export type SlotsToReactNode<S extends string> = {
  [key in S]?: React.ReactElement<{ children?: React.ReactNode }>;
};

// export type SlotsToSlotProps<S extends string> = {
//   [key in S]: object & {
//     className?: string;
//   };
// };

export type UnknownTV = () => unknown;
