import { mergeProps, TRANSITION_VARIANTS } from "@jamsrui/utils";
import { AnimatePresence, motion } from "motion/react";

import { useAccordionContext } from "./accordion-context";
import { useAccordionItemContext } from "./accordion-item-context";

import type { ComponentProps } from "react";

const AccordionPanel = (props: AccordionPanel.Props) => {
  const ctx = useAccordionContext();
  const mergedProps = mergeProps(ctx.slotProps?.panel ?? {}, props);
  const { isOpen, getPanelProps } = useAccordionItemContext();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.section
          animate="enter"
          exit="exit"
          initial="exit"
          variants={TRANSITION_VARIANTS.collapse}
          {...getPanelProps(mergedProps)}
        />
      ) : null}
    </AnimatePresence>
  );
};

namespace AccordionPanel {
  export interface Props extends ComponentProps<typeof motion.section> {}
}

export { AccordionPanel };
