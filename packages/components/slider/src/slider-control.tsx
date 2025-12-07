"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useSliderContext } from "./slider-context";
import { slider } from "./styles";

export const SliderControl = (props: SliderControl.Props) => {
  const { render, children, className, ...restProps } = props;
  const { orientation, isDisabled } = useSliderContext();
  const { control } = slider({ orientation, isDisabled });
  const styles = control({ className });

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      className: styles,
      render,
    },
  });
  return renderElement;
};

export namespace SliderControl {
  export interface Props extends UIProps<"div"> {}
}
