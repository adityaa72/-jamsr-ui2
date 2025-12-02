"use client";
import { Composite } from "@jamsrui/composite";
import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useAccordionConfig } from "./accordion-config";
import { AccordionContext } from "./accordion-context";
import { useAccordion } from "./use-accordion";

const Accordion = (props: Accordion.Props) => {
  const config = useAccordionConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useAccordion(mergedProps);
  const { getRootProps } = ctx;
  const { children } = mergedProps;

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children }],
  });
  return (
    <Composite>
      <AccordionContext value={ctx}>{renderElement}</AccordionContext>
    </Composite>
  );
};

namespace Accordion {
  export interface Props extends useAccordion.Props {}
}

export { Accordion };
