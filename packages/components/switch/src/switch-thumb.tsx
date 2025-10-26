import { useId } from "react";

import { motion } from "motion/react";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchThumb = (props: SwitchThumb.Props) => {
  const id = useId();
  const { getThumbProps } = useSwitchContext();
  return (
    <motion.div layoutId={id} {...getThumbProps(props)}>
      {props.children}
    </motion.div>
  );
  // const renderElement = useRenderElement("div", {
  //   props: [getThumbProps(props)],
  // });
  // return renderElement;
};

export namespace SwitchThumb {
  export interface Props extends UIProps<"div"> {}
}
