import { AnimatePresence, motion } from "motion/react";

import { useCollapsibleContext } from "./collapsible-context";

import type { UIProps } from "@jamsrui/utils";

export const CollapsibleContent = (props: CollapsibleContent.Props) => {
  const { children } = props;
  const { isOpen } = useCollapsibleContext();
  return (
    <AnimatePresence initial={false}>
      {!!isOpen && (
        <motion.div
          animate={{ height: "auto" }}
          className="overflow-hidden"
          exit={{ height: 0 }}
          initial={{ height: 0 }}
          role="region"
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export namespace CollapsibleContent {
  export interface Props extends UIProps<"div"> {}
}
