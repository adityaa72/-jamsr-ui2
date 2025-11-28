"use client";

import { HTMLMotionProps, motion } from "motion/react";
import { usePopoverContext } from "./popover-context";

export const PopoverDialog = (props: PopoverDialog.Props) => {
  const { children, ...restProps } = props;
  const { getDialogProps } = usePopoverContext();
  return <motion.div {...getDialogProps(restProps)}>{children}</motion.div>;
};

export namespace PopoverDialog {
  export interface Props extends HTMLMotionProps<"div"> {}
}
