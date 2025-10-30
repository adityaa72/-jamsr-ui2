import { mergeConfigProps } from "@jamsrui/utils";

import { useSwitchConfig } from "./switch-config";
import { SwitchContext } from "./switch-context";
import { useSwitch } from "./use-switch";

export const Switch = (props: Switch.Props) => {
  const config = useSwitchConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useSwitch(mergedProps);
  return <SwitchContext value={ctx}>{props.children}</SwitchContext>;
};

export namespace Switch {
  export interface Props extends useSwitch.Props {}
}
