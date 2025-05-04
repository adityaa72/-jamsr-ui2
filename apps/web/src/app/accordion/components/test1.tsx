import {
  Accordion,
  AccordionConfig,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsr-ui/accordion";

export const AccordionTest1 = () => {
  return (
    <AccordionConfig className="border-2 border-blue-300">
      <Accordion render={<section />}>
        <AccordionItem>
          <AccordionTrigger>Press me to open</AccordionTrigger>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
      </Accordion>
    </AccordionConfig>
  );
};
