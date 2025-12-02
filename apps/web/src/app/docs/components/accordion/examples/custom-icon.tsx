"use client";

import { MinusIcon, PlusIcon } from "@jamsrui/icons";
import { Accordion, useAccordionItemState } from "@jamsrui/react";

const AccordionIcon = () => {
  const { isOpen } = useAccordionItemState();
  return isOpen ? <MinusIcon /> : <PlusIcon />;
};

export const AccordionCustomIcon = () => {
  return (
    <Accordion variant="splitted">
      <Accordion.Item>
        <Accordion.Heading>
          <Accordion.Trigger>
            Accordion 1
            <Accordion.Indicator>
              <AccordionIcon />
            </Accordion.Indicator>
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
            <Accordion.Indicator>
              <AccordionIcon />
            </Accordion.Indicator>
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
            <Accordion.Indicator>
              <AccordionIcon />
            </Accordion.Indicator>
          </Accordion.Trigger>
        </Accordion.Heading>
        <Accordion.Panel>
          <Accordion.Content>I am the accordion content</Accordion.Content>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
