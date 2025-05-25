import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsr-ui/accordion";

export const AccordionUsage = () => {
  return (
    <Accordion variant="splitted" isMultiple>
      <AccordionItem value="value1">
        <AccordionTrigger>Press me to open</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
      <AccordionItem isDisabled value="value2">
        <AccordionTrigger>Press me to open</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="value3">
        <AccordionTrigger>Press me to open</AccordionTrigger>
        <AccordionContent>I am the accordion content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
