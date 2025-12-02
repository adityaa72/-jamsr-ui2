import { Accordion } from "@jamsrui/react";

export const AccordionMultipleSelection = () => {
  return (
    <Accordion variant="splitted" isMultiple>
      <Accordion.Item>
        <Accordion.Heading>
          <Accordion.Trigger>
            Accordion 1
            <Accordion.Indicator />
          </Accordion.Trigger>
        </Accordion.Heading>
        <Accordion.Panel>
          <Accordion.Content>I am the accordion content</Accordion.Content>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Heading>
          <Accordion.Trigger>
            Accordion 2
            <Accordion.Indicator />
          </Accordion.Trigger>
        </Accordion.Heading>
        <Accordion.Panel>
          <Accordion.Content>I am the accordion content</Accordion.Content>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Heading>
          <Accordion.Trigger>
            Accordion 3
            <Accordion.Indicator />
          </Accordion.Trigger>
        </Accordion.Heading>
        <Accordion.Panel>
          <Accordion.Content>I am the accordion content</Accordion.Content>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
