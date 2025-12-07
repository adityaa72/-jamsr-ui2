"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useSliderContext } from "./slider-context";
import { slider } from "./styles";

export const SliderValue = (props: SliderValue.Props) => {
  const { render, children, className, ...restProps } = props;
  const { values, orientation, isDisabled } = useSliderContext();
  const { value } = slider({ orientation, isDisabled });
  const styles = value({ className });

  // What to display?
  // Usually usage is `<Slider.Value>{(vals) => vals.join(' - ')}</Slider.Value>`?
  // OR just defaults to displaying values?
  // Base UI example: `<Slider.Value />` renders current value text.
  // If children is a function, we call it with values.

  let content: React.ReactNode;
  if (typeof children === "function") {
    content = (children as any)(values);
  } else if (children) {
    content = children;
  } else {
    content = values.join(" - ");
  }

  // Wait, useRenderElement `children` prop handling usually doesn't strictly support function children
  // if using strict types or standard React types unless defined.
  // But `UIProps` implies standard ReactNode.
  // If I want to support Render Props for children, I should handle it.

  // If I pass `content` as children to `useRenderElement`, it will render it.
  // But `children` in props passed to `useRenderElement` ends up as children of the element.

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children: content,
      className: styles,
      render,
    },
  });
  return renderElement;
};

export namespace SliderValue {
  export interface Props extends Omit<UIProps<"div">, "children"> {
    children?: React.ReactNode | ((values: number[]) => React.ReactNode);
  }
}
