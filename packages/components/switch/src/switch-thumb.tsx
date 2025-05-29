import { useRenderElement } from "@jamsr-ui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SwitchThumb = (props: SwitchThumb.Props) => {
  const { getThumbProps } = useSwitchContext();
  const renderElement = useRenderElement("div", {
    props: [getThumbProps(props)],
  });
  return renderElement;
};

export namespace SwitchThumb {
  export interface Props extends UIProps<"div"> {}
}
