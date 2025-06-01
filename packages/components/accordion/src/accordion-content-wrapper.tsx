import { mergeProps, TRANSITION_VARIANTS } from "@jamsrui/utils";
import { motion } from "motion/react";

import { useAccordionContext } from "./accordion-context";
import { useAccordionItemContext } from "./accordion-item-context";

import type { ComponentProps } from "react";

export const AccordionContentWrapper = (
  props: AccordionContentWrapper.Props
) => {
  const ctx = useAccordionContext();
  const mergedProps = mergeProps(ctx.slotProps?.contentWrapper ?? {}, props);
  const { getContentWrapperProps } = useAccordionItemContext();
  return (
    <motion.section
      animate="enter"
      exit="exit"
      initial="exit"
      variants={TRANSITION_VARIANTS.collapse}
      {...getContentWrapperProps(mergedProps)}
    />
  );
};

export namespace AccordionContentWrapper {
  export interface Props extends ComponentProps<typeof motion.section> {}
}
