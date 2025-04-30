import { cloneElement } from "react";
import { mergeProps } from "./merge-props";
import { useMergeRefs } from "./use-merge-refs";

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
  const { props: _props } = params;
  const props = Array.isArray(_props) ? _props : [_props];
  const mergedProps = mergeProps(...props, render.props);

  const refs = useMergeRefs([
    render.props.ref,
    ...props.map((item) => item.ref),
  ]);

  return cloneElement(render, {
    ...mergedProps,
    ref: refs,
  });
};

export namespace useRenderElement {
  export interface Parameters<
    TagName extends keyof React.JSX.IntrinsicElements,
  > {
    props:
      | React.ComponentProps<TagName>
      | React.ComponentProps<TagName>[];
  }

  export interface ComponentProps {
    className?: string;
    render?: React.ReactElement;
  }
}
