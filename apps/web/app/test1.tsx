import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsr-ui/accordion";

export const AccordionTest1 = () => {
  return (
    <Accordion render={<section />}>
      <AccordionItem>
        <AccordionTrigger>Press me to open</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
