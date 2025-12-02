"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Accordion } from "./accordion";

export const [AccordionConfig, useAccordionConfig] =
  createConfigContext<AccordionConfig.Props>({
    displayName: "AccordionConfigContext",
  });

export namespace AccordionConfig {
  export interface Props
    extends Accordion.Props,
      GlobalConfigProps<Accordion.Props> {}
}
