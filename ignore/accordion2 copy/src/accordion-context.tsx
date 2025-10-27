import { createContext, use } from "react";

import type { useAccordion } from "./use-accordion";

const AccordionContext = createContext<AccordionContextProvider.Type | null>(
  null
);

export const AccordionContextProvider = (
  props: AccordionContextProvider.Props
) => {
  const { children, ctx } = props;
  return <AccordionContext value={ctx}>{children}</AccordionContext>;
};

export const useAccordionContext = () => {
  const ctx = use(AccordionContext);
  if (!ctx)
    throw new Error(
      "useAccordionContext must be used within AccordionContextProvider"
    );
  return ctx;
};

export namespace AccordionContextProvider {
  export interface Type extends ReturnType<typeof useAccordion> {}
  export interface Props {
    ctx: Type;
    children: React.ReactNode;
  }
}
