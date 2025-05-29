import { useRenderElement } from "@jamsr-ui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SwitchDescription = (props: SwitchDescription.Props) => {
  const { getDescriptionProps } = useSwitchContext();
  const renderElement = useRenderElement("div", {
    props: [getDescriptionProps(props)],
  });
  return renderElement;
};

export namespace SwitchDescription {
  export interface Props extends UIProps<"div"> {}
}
