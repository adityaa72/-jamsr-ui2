import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@jamsrui/accordion2/primitive";

export const AccordionPrimitiveUsage = () => {
  return (
    <Accordion variant="splitted">
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>Accordion 1</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>Accordion 1</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>Accordion 1</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
