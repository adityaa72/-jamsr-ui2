"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useSliderContext } from "./slider-context";
import { slider } from "./styles";

export const SliderTrack = (props: SliderTrack.Props) => {
  const { render, children, className, ...restProps } = props;
  const { orientation, isDisabled, onTrackPointerDown, trackRef } =
    useSliderContext();
  const { track } = slider({ orientation, isDisabled });
  const styles = track({ className });

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      className: styles,
      onPointerDown: onTrackPointerDown,
      ref: trackRef,
      render,
    },
  });
  return renderElement;
};

export namespace SliderTrack {
  export interface Props extends UIProps<"div"> {}
}
