import { createContext, use } from "react";
import { Accordion } from "./accordion";

const AccordionContext = createContext<AccordionConfig.Props>({});
export const AccordionConfig = (props: AccordionConfig.Props) => {
  const { children, ...restProps } = props;
  return <AccordionContext value={restProps}>{children}</AccordionContext>;
};

export const useAccordionConfig = () => {
  const context = use(AccordionContext);
  return context;
};

export namespace AccordionConfig {
  export interface Props extends Accordion.Props {}
}
