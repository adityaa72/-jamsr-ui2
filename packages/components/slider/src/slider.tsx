"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import React from "react";
import { SliderContext } from "./slider-context";
import { useSlider, UseSliderProps } from "./use-slider";
import { slider, SliderVariants } from "./styles";

const Root = (props: Slider.Props) => {
  const {
    render,
    children,
    className,
    defaultValue,
    value,
    onChange,
    min,
    max,
    step,
    orientation,
    isDisabled,
    minStepsBetweenThumbs,
    name,
    ...restProps
  } = props;

  const context = useSlider({
    defaultValue,
    value,
    onChange,
    min,
    max,
    step,
    orientation,
    isDisabled,
    minStepsBetweenThumbs,
    name,
  });

  const { root } = slider({ orientation, isDisabled });
  const styles = root({ className });

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      className: styles,
      "data-orientation": context.orientation,
      "data-disabled": context.isDisabled ? "" : undefined,
      render,
    },
  });

  return (
    <SliderContext.Provider value={context}>
      {renderElement}
    </SliderContext.Provider>
  );
};

export const Slider = Root;

export namespace Slider {
  export interface Props
    extends Omit<UIProps<"div">, "onChange" | "defaultValue">,
      SliderVariants,
      UseSliderProps {}
}
