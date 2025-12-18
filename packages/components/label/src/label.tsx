"use client";
import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useLabelConfig } from "./label-config";
import { labelVariants } from "./styles";
import { useLabel } from "./use-label";

export const Label = (props: Label.Props) => {
  const config = useLabelConfig();
  const mergedProps = mergeConfigProps(
    labelVariants.defaultVariants,
    config,
    props
  );
  const labelProps = useLabel(mergedProps);
  const renderElement = useRenderElement("label", {
    props: [labelProps],
  });
  return renderElement;
};

export namespace Label {
  export interface Props extends useLabel.Props {}
}
