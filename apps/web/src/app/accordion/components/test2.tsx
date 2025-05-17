"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsr-ui/accordion";

export const AccordionTest2 = () => {
  return (
    <Accordion
      render={
        <section
          className="bg-red-500"
          onClick={() => console.log("clicked on section")}
          onMouseOver={() => console.log("hovered on section")}
        />
      }
    >
      <AccordionItem>
        <AccordionTrigger>Press me to open</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
