"use client";

import { motion } from "motion/react";

import { useSwitchContext } from "./switch-context";

import type { HTMLMotionProps } from "motion/react";

export const SwitchThumb = (props: SwitchThumb.Props) => {
  const { getThumbProps } = useSwitchContext();
  const { children, ...restProps } = props;
  return <motion.div {...getThumbProps(restProps)}>{children}</motion.div>;
};

export namespace SwitchThumb {
  export interface Props extends HTMLMotionProps<"div"> {}
}
