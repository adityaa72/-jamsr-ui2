import { motion } from "motion/react";

import { useTabsContext } from "./tabs-context";

import type { MotionProps } from "motion/react";

export const TabCursor = (props: TabCursor.Props) => {
  const { getCursorProps } = useTabsContext();
  return <motion.div {...getCursorProps(props)} />;
};

export namespace TabCursor {
  export interface Props
    extends MotionProps,
      Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> {}
}
