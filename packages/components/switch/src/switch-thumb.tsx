"use client";

import { LayoutGroup, motion } from "motion/react";

import { useSwitchContext } from "./switch-context";

import type { HTMLMotionProps } from "motion/react";

export const SwitchThumb = (props: SwitchThumb.Props) => {
  const { getThumbProps } = useSwitchContext();
  const { children, ...restProps } = props;
  return (
    <LayoutGroup>
      <motion.div
        {...getThumbProps(restProps)}
        layout="position"
        style={{ originY: "0px" }}
      >
        {children}
      </motion.div>
    </LayoutGroup>
  );
};

export namespace SwitchThumb {
  export interface Props extends HTMLMotionProps<"div"> {}
}
