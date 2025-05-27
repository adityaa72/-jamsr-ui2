import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsr-ui/accordion";

export const AccordionUsage = () => {
  return (
    <Accordion variant="splitted">
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
