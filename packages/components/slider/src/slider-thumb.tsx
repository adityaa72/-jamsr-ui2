"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import React, { useRef, useLayoutEffect } from "react";
import { useSliderContext } from "./slider-context";
import { slider } from "./styles";

export const SliderThumb = (props: SliderThumb.Props) => {
  const { render, children, className, index = 0, ...restProps } = props;
  const {
    orientation,
    isDisabled,
    values,
    getPercentageForValue,
    registerThumb,
    handleThumbPointerDown,
  } = useSliderContext();
  const { thumb } = slider({ orientation, isDisabled });
  const styles = thumb({ className });

  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    // @ts-expect-error - ref type mismatch if any, but we normalized to HTMLDivElement
    registerThumb(index, ref);
  }, [index, registerThumb]);

  const value = values[index] ?? 0; // fallback
  const percent = getPercentageForValue(value);

  // Position
  // We need to center the thumb?
  // Base UI does `left: percent%`.
  // And `transform: translate(-50%, -50%)` usually via styles.
  // My tokens in `styles.ts` didn't explicitly add translate.
  // Let's check `styles.ts`: "block h-5 w-5 rounded-full ...".
  // I should add `translate` logic in style or CSS.
  // For now adding it here or in style prop.
  // Better to handle in implementation style to ensure it works.

  // Actually, Radix/Base usually use `left` and `top`.
  // If orientation is horizontal, left = percent%.
  // If vertical, bottom = percent% (if bottom-up).

  const style: React.CSSProperties =
    orientation === "horizontal"
      ? {
          left: `${percent}%`,
          transform: "translateX(-50%)",
          position: "absolute",
        }
      : {
          bottom: `${percent}%`,
          transform: "translateY(50%)",
          position: "absolute",
        }; // translateY(50%) moves it down to center if bottom is origin?
  // If bottom is 0, thumb center should be at 0.
  // Thumb bottom edge is at 0. Center is at height/2.
  // So `translateY(50%)` moves it DOWN, which is correct relative to bottom?
  // Wait, if bottom: 0, translateY(50%) moves it further down.
  // We want center at anchor.
  // If `bottom: 0`, top of thumb is at `height`.
  // To center it, we move it down by 50%. So `translateY(50%)`. Correct.

  // Wait, let's double check.
  // transform-origin is center usually.
  // If I place a div at left: 50%. It starts at 50%.
  // translateX(-50%) moves it left by half width, so center is at 50%. Correct.

  // Vertical: bottom: 50%. Ends up.
  // translateY(50%) moves it down.
  // So center is at 50% relative to container height. Correct.

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      className: styles,
      ref,
      style: { ...restProps.style, ...style },
      onPointerDown: (e) => handleThumbPointerDown(index, e),
      tabIndex: isDisabled ? undefined : 0,
      role: "slider",
      "aria-valuenow": value,
      "aria-disabled": isDisabled,
      "aria-orientation": orientation,
      render,
    },
  });
  return renderElement;
};

export namespace SliderThumb {
  export interface Props extends UIProps<"div"> {
    index?: number;
  }
}
