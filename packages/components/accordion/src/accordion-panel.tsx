"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";

import { useAccordionItemContext } from "./accordion-item-context";

import { TRANSITION_VARIANTS } from "@jamsrui/utils";

export const AccordionPanel = (props: AccordionPanel.Props) => {
  const { isOpen, getPanelProps } = useAccordionItemContext();
  return (
    <AnimatePresence>
      {!!isOpen && (
        <motion.section
          animate="enter"
          exit="exit"
          initial="exit"
          variants={TRANSITION_VARIANTS.collapse}
          {...getPanelProps(props)}
        />
      )}
    </AnimatePresence>
  );
};

export namespace AccordionPanel {
  export interface Props extends HTMLMotionProps<"section"> {}
}
