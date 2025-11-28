"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";

import { useCollapsibleContext } from "./collapsible-context";

export const CollapsibleContent = (props: CollapsibleContent.Props) => {
  const { children, ...restProps } = props;
  const { isOpen, getContentProps } = useCollapsibleContext();
  return (
    <AnimatePresence initial={false}>
      {!!isOpen && (
        <motion.div
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          initial={{ height: 0 }}
          role="region"
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          {...getContentProps(restProps)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export namespace CollapsibleContent {
  export interface Props extends HTMLMotionProps<"div"> {}
}
