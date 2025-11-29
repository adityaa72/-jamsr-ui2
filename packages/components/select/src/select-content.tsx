"use client";

import { useLayoutEffect } from "react";

import { FloatingList } from "@floating-ui/react";
import { motion } from "motion/react";

import { useSelectContext } from "./select-context";

import type { HTMLMotionProps } from "motion/react";

export const SelectContent = (props: SelectContent.Props) => {
  const { children } = props;
  const { getContentProps, getFloatingListProps, updateSelectItems } =
    useSelectContext();

  useLayoutEffect(() => {
    updateSelectItems(children);
  }, [children, updateSelectItems]);

  return (
    <motion.div {...getContentProps(props)}>
      <FloatingList {...getFloatingListProps()}>{children}</FloatingList>
    </motion.div>
  );
};

export namespace SelectContent {
  export interface Props extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
  }
}
