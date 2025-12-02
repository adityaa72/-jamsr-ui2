"use client";

import { createContext, use } from "react";

import type { useAccordionItem } from "./use-accordion-item";

const AccordionItemContext =
  createContext<AccordionItemContextProvider.Type | null>(null);

export const AccordionItemContextProvider = (
  props: AccordionItemContextProvider.Props
) => {
  const { children, ctx } = props;
  return <AccordionItemContext value={ctx}>{children}</AccordionItemContext>;
};

export const useAccordionItemContext = () => {
  const ctx = use(AccordionItemContext);
  if (!ctx)
    throw new Error(
      "useAccordionItemContext must be used within AccordionItemContextProvider"
    );
  return ctx;
};

export const useAccordionItemState = () => {
  const ctx = useAccordionItemContext();
  return {
    isOpen: ctx.isOpen,
    isDisabled: ctx.isDisabled,
  };
};

export namespace AccordionItemContextProvider {
  export interface Type extends ReturnType<typeof useAccordionItem> {}
  export interface Props {
    ctx: Type;
    children: React.ReactNode;
  }
}
