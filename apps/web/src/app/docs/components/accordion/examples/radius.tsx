import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsr-ui/react";

export const AccordionRadius = () => {
  return (
    <Accordion variant="splitted" radius="2xl" >
      <AccordionItem>
        <AccordionTrigger>Accordion 1</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Accordion 2</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Accordion 3</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
