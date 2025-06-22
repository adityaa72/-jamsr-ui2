import { useRenderElement } from "@jamsrui/hooks";
import { motion } from "motion/react";

import { useLinearProgressContext } from "./linear-progress-context";

import type { HTMLMotionProps } from "motion/react";

export const LinearProgressBar = (props: LinearProgressBar.Props) => {
  const { getBarProps } = useLinearProgressContext();
  const renderElement = useRenderElement(motion.div, {
    props: [getBarProps(props)],
  });
  return renderElement;
};

export namespace LinearProgressBar {
  export interface Props extends HTMLMotionProps<"div"> {}
}
