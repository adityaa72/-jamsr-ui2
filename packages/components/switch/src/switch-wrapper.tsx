import { useRenderElement } from "@jamsr-ui/hooks";

import { useSwitchContext } from "./switch-context";
import { SwitchTrack } from "./switch-track";
import { SwitchContent } from "./swith-content";

import type { UIProps } from "@jamsr-ui/utils";

export const SwitchWrapper = (props: SwitchWrapper.Props) => {
  const { children } = props;
  const { getWrapperProps } = useSwitchContext();

  const composedChildren = (
    <>
      <SwitchContent>{children}</SwitchContent>
      <SwitchTrack />
    </>
  );
  const renderElement = useRenderElement("div", {
    props: [getWrapperProps(props), { children: composedChildren }],
  });
  return renderElement;
};

export namespace SwitchWrapper {
  export interface Props extends UIProps<"div"> {}
}
