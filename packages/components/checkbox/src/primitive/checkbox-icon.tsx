import { motion } from "motion/react";

import { useCheckboxContext } from "./checkbox-context";

import type { Variants } from "motion/react";

const tickVariants: Variants = {
  pressed: {
    pathLength: 0.5,
  },
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const CheckboxIcon = () => {
  const { isChecked, isIntermediate } = useCheckboxContext();
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-primary-foreground"
      data-slot="icon"
    >
      <motion.svg
        animate={isChecked || isIntermediate ? "checked" : "unchecked"}
        className="size-3.5"
        fill="none"
        initial={false}
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={isIntermediate ? "M5 12h14" : "M4.5 12.75l6 6 9-13.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={tickVariants}
        />
      </motion.svg>
    </div>
  );
};
