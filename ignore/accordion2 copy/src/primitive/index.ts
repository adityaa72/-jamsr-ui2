"use client";

import { Accordion as Root } from "../accordion";
import { AccordionContent } from "../accordion-content";
import { AccordionHeader } from "../accordion-header";
import { AccordionItem } from "../accordion-item";
import { AccordionPanel } from "../accordion-panel";
import { AccordionTrigger } from "../accordion-trigger";

export const AccordionBase = {
  Root,
  Header: AccordionHeader,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
  Content: AccordionContent,
};
