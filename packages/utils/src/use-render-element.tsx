import { cloneElement } from "react";
import { mergeProps } from "./merge-props";

function tag(Tag: string) {
  return function render(props: React.HTMLAttributes<any>) {
    if (Tag === "button") {
      return <button type="button" {...props} />;
    }
    if (Tag === "img") {
      return <img alt="" {...props} />;
    }
    return <Tag {...props} />;
  };
}

export const useRenderElement = <
  TagName extends keyof React.JSX.IntrinsicElements,
>(
  element: TagName,
  componentProps: useRenderElement.ComponentProps,
  params: useRenderElement.Parameters<TagName>
) => {
  const { render: renderProp } = componentProps;
  const render = renderProp ?? tag(element)({});
  const { props } = params;
  const mergedProps = mergeProps(...props, render.props);
  return cloneElement(render, {
    ...mergedProps,
  });
};

export namespace useRenderElement {
  export interface Parameters<
    TagName extends keyof React.JSX.IntrinsicElements,
  > {
    props: React.ComponentPropsWithoutRef<TagName>[];
  }

  export interface ComponentProps {
    className?: string;
    render?: React.ReactElement;
  }
}
