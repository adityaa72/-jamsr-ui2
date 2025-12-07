import { Accordion as AccordionRoot } from "./accordion";
import { AccordionConfig, useAccordionConfig } from "./accordion-config";
import { useAccordionItemState } from "./accordion-item-context";
import { AccordionContent } from "./accordion-content";
import { AccordionHeading } from "./accordion-heading";
import { AccordionIndicator } from "./accordion-indicator";
import { AccordionItem } from "./accordion-item";
import { AccordionPanel } from "./accordion-panel";
import { AccordionTrigger } from "./accordion-trigger";
import { AccordionSlots, AccordionVariants, accordionVariants } from "./styles";

export {
  AccordionConfig,
  AccordionContent,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  accordionVariants,
  useAccordionConfig,
  useAccordionItemState,
  type AccordionSlots,
  type AccordionVariants,
};

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
  Panel: AccordionPanel,
  Indicator: AccordionIndicator,
  Heading: AccordionHeading,
});

export namespace Accordion {
  export interface Props extends AccordionRoot.Props {}
  export interface Config extends AccordionConfig.Props {}
  export interface Item extends AccordionItem.Props {}
  export interface Trigger extends AccordionTrigger.Props {}
  export interface Content extends AccordionContent.Props {}
  export interface Panel extends AccordionPanel.Props {}
  export interface Indicator extends AccordionIndicator.Props {}
  export interface Heading extends AccordionHeading.Props {}
}
