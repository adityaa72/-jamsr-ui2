import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchDescription = (props: SwitchDescription.Props) => {
  const { getDescriptionProps, description } = useSwitchContext();
  const renderElement = useRenderElement("div", {
    props: [
      getDescriptionProps(props),
      {
        children: description,
      },
    ],
  });
  if (!description) return null;
  return renderElement;
};

export namespace SwitchDescription {
  export interface Props extends UIProps<"div"> {}
}
