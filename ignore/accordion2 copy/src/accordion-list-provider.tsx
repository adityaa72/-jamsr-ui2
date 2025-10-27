import { createContext, use } from "react";

export const AccordionListItemContext =
  createContext<AccordionListItemContext.Type | null>(null);

export const useAccordionListItem = () => {
  const context = use(AccordionListItemContext);
  if (!context) {
    throw new Error("AccordionListItemContext not found");
  }
  return context;
};

export namespace AccordionListItemContext {
  export interface Type {
    index: number;
  }
}
