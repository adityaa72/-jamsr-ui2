"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsr-ui/accordion";

export const AccordionTest2 = () => {
  return (
    <div className="p-4">
      <Accordion variant="splitted" isMultiple>
        <AccordionItem>
          <AccordionTrigger>Press me to open</AccordionTrigger>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Press me to open</AccordionTrigger>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Press me to open</AccordionTrigger>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Press me to open</AccordionTrigger>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
