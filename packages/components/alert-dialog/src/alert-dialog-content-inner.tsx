"use client";

import { motion } from "motion/react";

import { useAlertDialogContext } from "./alert-dialog-context";

import type { HTMLMotionProps } from "motion/react";

export const AlertDialogContentInner = (
  props: AlertDialogContentInner.Props
) => {
  const { getContentProps } = useAlertDialogContext();
  return (
    <motion.div
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      initial={{ scale: 0.9, opacity: 0, filter: "blur(4px)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      exit={{
        scale: 0.95,
        opacity: 0,
        filter: "blur(4px)",
        transition: {
          duration: 0.25,
        },
      }}
      {...getContentProps(props)}
    />
  );
};

export namespace AlertDialogContentInner {
  export interface Props extends HTMLMotionProps<"div"> {}
}
