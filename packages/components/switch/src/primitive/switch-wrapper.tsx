import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchWrapper = (props: SwitchWrapper.Props) => {
  const { getWrapperProps } = useSwitchContext();
  const renderElement = useRenderElement("label", {
    props: [getWrapperProps(props)],
  });
  return renderElement;
};

export namespace SwitchWrapper {
  export interface Props extends UIProps<"label"> {}
}
