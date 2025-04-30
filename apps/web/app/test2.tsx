"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsr-ui/accordion";
import { useRef } from "react";

export const AccordionTest2 = () => {
  const ref = useRef<HTMLDivElement>(null);
  console.log(" ref:->", ref);
  return (
    <Accordion
      ref={(node) => {
        console.log(" node:->", node);
        ref.current = node;
      }}
      onClick={() => {
        console.log(ref);
        console.log("clicked on accordion");
      }}
      render={
        <section
          ref={(node) => {
            console.log("node2:->", node);
          }}
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
