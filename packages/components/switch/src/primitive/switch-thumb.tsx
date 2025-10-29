import { useId } from "react";

import { motion } from "motion/react";

import { useSwitchContext } from "./switch-context";

import type { HTMLMotionProps } from "motion/react";

export const SwitchThumb = (props: SwitchThumb.Props) => {
  const id = useId();
  const { getThumbProps } = useSwitchContext();
  return (
    <motion.div layoutId={id} {...getThumbProps(props)}>
      {props.children}
    </motion.div>
  );
};

export namespace SwitchThumb {
  export interface Props extends HTMLMotionProps<"div"> {}
}
