"use client";

import { motion } from "motion/react";

import { useTabsContext } from "./tabs-context";

import type { MotionProps } from "motion/react";
import { useTabContext } from "./tab-context";

export const TabIndicator = (props: TabIndicator.Props) => {
  const { getIndicatorProps } = useTabsContext();
  const { isActive } = useTabContext();
  if (!isActive) return null;
  return <motion.div {...getIndicatorProps(props)} />;
};

export namespace TabIndicator {
  export interface Props
    extends MotionProps,
      Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> {}
}
