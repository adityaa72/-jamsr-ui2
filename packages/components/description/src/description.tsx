"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useDescription } from "./use-description";
import { useDescriptionConfig } from "./description-config";
import { mergeConfigProps } from "@jamsrui/utils";
import { descriptionVariants } from "./styles";

export const Description = (props: Description.Props) => {
  const config = useDescriptionConfig();
  const mergedProps = mergeConfigProps(
    descriptionVariants.defaultVariants,
    config,
    props
  );
  const descProps = useDescription(mergedProps);
  const renderElement = useRenderElement("p", {
    props: [descProps],
  });
  return renderElement;
};

export namespace Description {
  export interface Props extends useDescription.Props {}
}
