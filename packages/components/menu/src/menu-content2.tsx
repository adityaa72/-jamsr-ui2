import { motion } from "motion/react";

import { useMenuContext } from "./menu-context";

import type { HTMLMotionProps } from "motion/react";

export const MenuContent2 = (props: MenuContent2.Props) => {
  const { children, ...restProps } = props;
  const { getContentProps, isNested } = useMenuContext();
  return (
    <motion.div
      {...(!isNested
        ? {
            exit: { opacity: 0, scale: 0.8 },
            initial: {
              opacity: 0,
              scale: 0.8,
            },
            transition: { type: "spring", stiffness: 300, damping: 25 },
            animate: {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            },
          }
        : {})}
      {...getContentProps(restProps)}
    >
      {children}
    </motion.div>
  );
};

export namespace MenuContent2 {
  export interface Props extends HTMLMotionProps<"div"> {}
}
