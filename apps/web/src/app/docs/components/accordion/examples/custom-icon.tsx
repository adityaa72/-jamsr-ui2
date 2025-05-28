"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  useAccordionItemState,
} from "@jamsr-ui/accordion";
import { MinusIcon, PlusIcon } from "@jamsr-ui/icons";

const AccordionIndicator = () => {
  const { isOpen } = useAccordionItemState();
  return isOpen ? <MinusIcon /> : <PlusIcon />;
};

export const AccordionCustomIcon = () => {
  return (
    <Accordion variant="splitted">
      <AccordionItem indicator={<AccordionIndicator />}>
        <AccordionTrigger>Accordion 1</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
      <AccordionItem indicator={<AccordionIndicator />}>
        <AccordionTrigger>Accordion 2</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
      <AccordionItem indicator={<AccordionIndicator />}>
        <AccordionTrigger>Accordion 3</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
