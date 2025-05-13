import React, { cloneElement } from "react";

import { mergeProps } from "@jamsr-ui/utils";


import { useMergeRefs } from "./use-merge-refs";

import type { UIProps } from "@jamsr-ui/utils";

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
  params: useRenderElement.Parameters<TagName>
): React.ReactElement => {
  const { props: _props } = params;

  const props = Array.isArray(_props) ? _props : [_props];
  const mergedProps = mergeProps(...props);
  const { render: renderProp, ...elementProps } = mergedProps;

  const render = renderProp ?? tag(element)({});
  const refs = useMergeRefs([
    render.props.ref,
    ...props.map((item) => item.ref),
  ]);

  const finalProps = mergeProps(render.props, elementProps);
  return cloneElement(render, {
    ...finalProps,
    ref: refs,
  });
};

export namespace useRenderElement {
  export interface Parameters<
    TagName extends keyof React.JSX.IntrinsicElements,
  > {
    props: UIProps<TagName> | UIProps<TagName>[];
  }

  export interface ComponentProps {
    className?: string;
    render?: React.ReactElement;
  }
}
