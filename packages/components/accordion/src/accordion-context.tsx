import { createContext, use } from "react";

import type { useAccordion } from "./use-accordion";

export const AccordionContext = createContext<AccordionContext.Props | null>(
  null
);

export const useAccordionContext = () => {
  const ctx = use(AccordionContext);
  if (!ctx)
    throw new Error(
      "useAccordionContext must be used within AccordionContextProvider"
    );
  return ctx;
};

export namespace AccordionContext {
  export interface Props extends ReturnType<typeof useAccordion> {}
}
