import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsr-ui/accordion";
import { Button } from "@jamsr-ui/button";

export const AccordionTest1 = () => {
  return (
    <div className="p-4">
      <Accordion variant="splitted" defaultValue={["1", "2"]} isMultiple>
        <AccordionItem value="value1">
          <AccordionTrigger>Press me to open</AccordionTrigger>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="value2">
          <AccordionTrigger>Press me to open</AccordionTrigger>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="value3">
          <AccordionTrigger>Press me to open</AccordionTrigger>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="value4">
          <div className="flex items-center gap-2 px-4">
            <Button size="xs" render={<div />} isLoading color="danger">
              Press Me!
            </Button>
            <AccordionTrigger>
              <Button size="xs" render={<div />} isLoading color="danger">
                Press Me!
              </Button>
              Press me to open
              <Button size="xs" render={<div />} isLoading color="danger">
                Press Me!
              </Button>
            </AccordionTrigger>
          </div>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
