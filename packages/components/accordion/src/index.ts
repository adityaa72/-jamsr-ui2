import { Accordion as AccordionRoot } from "./accordion";
import { AccordionConfig } from "./accordion-config";
import { AccordionContent } from "./accordion-content";
import { AccordionHeading } from "./accordion-heading";
import { AccordionIndicator } from "./accordion-indicator";
import { AccordionItem } from "./accordion-item";
import { useAccordionItemState } from "./accordion-item-context";
import { AccordionPanel } from "./accordion-panel";
import { AccordionTrigger } from "./accordion-trigger";

export {
  AccordionConfig,
  AccordionContent,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  useAccordionItemState,
};

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
  Panel: AccordionPanel,
  Indicator: AccordionIndicator,
  Heading: AccordionHeading,
});

export namespace Accordion {
  export interface Props extends AccordionRoot.Props {}
  export interface Item extends AccordionItem.Props {}
  export interface Trigger extends AccordionTrigger.Props {}
  export interface Content extends AccordionContent.Props {}
  export interface Panel extends AccordionPanel.Props {}
  export interface Indicator extends AccordionIndicator.Props {}
  export interface Heading extends AccordionHeading.Props {}
}
