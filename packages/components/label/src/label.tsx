"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useLabel } from "./use-label";

export const Label = (props: Label.Props) => {
  const labelProps = useLabel(props);
  const renderElement = useRenderElement("label", {
    props: [labelProps],
  });
  return renderElement;
};

export namespace Label {
  export interface Props extends useLabel.Props {}
}
