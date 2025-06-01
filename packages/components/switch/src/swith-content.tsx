import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";
import { SwitchDescription } from "./switch-description";
import { SwitchLabel } from "./switch-label";

import type { UIProps } from "@jamsrui/utils";

export const SwitchContent = (props: SwitchContent.Props) => {
  const { children } = props;
  const { getContentProps } = useSwitchContext();
  const composedChildren = (
    <>
      <SwitchLabel />
      <SwitchDescription>{children}</SwitchDescription>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getContentProps(props), { children: composedChildren }],
  });
  return renderElement;
};

export namespace SwitchContent {
  export interface Props extends UIProps<"div"> {}
}
