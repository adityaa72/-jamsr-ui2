import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useSwitchConfig } from "./switch-config";
import { SwitchContext } from "./switch-context";
import { SwitchWrapper } from "./switch-wrapper";
import { SwitchErrorMessage } from "./swith-error-message";
import { useSwitch } from "./use-switch";

export const Switch = (props: Switch.Props) => {
  const { children } = props;
  const config = useSwitchConfig();
  const mergedProps = mergeProps(config, props);

  const ctx = useSwitch(mergedProps);
  const { getRootProps } = ctx;

  const composedChildren = (
    <>
      <SwitchWrapper>{children}</SwitchWrapper>
      <SwitchErrorMessage />
    </>
  );
  const renderElement = useRenderElement("div", {
    props: [
      getRootProps({}),
      {
        children: composedChildren,
      },
    ],
  });
  return <SwitchContext value={ctx}>{renderElement}</SwitchContext>;
};

export namespace Switch {
  export interface Props extends useSwitch.Props {}
}
