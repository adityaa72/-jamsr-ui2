"use client";

import { motion } from "motion/react";

import { useDialogContext } from "./dialog-context";

import type { HTMLMotionProps } from "motion/react";

export const DialogContent = (props: DialogContent.Props) => {
  const { children } = props;
  const { getContentProps } = useDialogContext();
  return <motion.div {...getContentProps(props)}>{children}</motion.div>;
};
export namespace DialogContent {
  export interface Props extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
  }
}
