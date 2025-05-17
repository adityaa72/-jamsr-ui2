import { createConfigContext } from "@jamsr-ui/utils";

import type { Accordion } from "./accordion";

export const [AccordionConfig, useAccordionConfig] =
  createConfigContext<AccordionConfig.Props>({
    displayName: "AccordionConfigContext",
  });

export namespace AccordionConfig {
  export interface Props extends Accordion.Props {}
}
