import { cloneElement } from "react";

import { useCompositeItem } from "./use-composite-item";

export const CompositeItem = (props: CompositeItem.Props) => {
  const { children, ...restProps } = props;
  const ctx = useCompositeItem(restProps);
  return cloneElement(children, ctx.props);
};

export namespace CompositeItem {
  export interface Props extends useCompositeItem.Props {
    children: React.ReactElement;
  }
}
