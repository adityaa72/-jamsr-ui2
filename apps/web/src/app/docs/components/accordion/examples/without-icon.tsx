import { Accordion } from "@jamsrui/react";

export const AccordionWithoutIcon = () => {
  return (
    <Accordion variant="splitted">
      <Accordion.Item>
        <Accordion.Heading>
          <Accordion.Trigger>Accordion 1</Accordion.Trigger>
        </Accordion.Heading>
        <Accordion.Panel>
          <Accordion.Content>I am the accordion content</Accordion.Content>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Heading>
          <Accordion.Trigger>Accordion 2</Accordion.Trigger>
        </Accordion.Heading>
        <Accordion.Panel>
          <Accordion.Content>I am the accordion content</Accordion.Content>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Heading>
          <Accordion.Trigger>Accordion 3</Accordion.Trigger>
        </Accordion.Heading>
        <Accordion.Panel>
          <Accordion.Content>I am the accordion content</Accordion.Content>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
