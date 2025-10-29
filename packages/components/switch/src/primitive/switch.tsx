import { SwitchContext } from "./switch-context";
import { useSwitch } from "./use-switch";

export const Switch = (props: Switch.Props) => {
  const ctx = useSwitch(props);
  return <SwitchContext value={ctx}>{props.children}</SwitchContext>;
};

export namespace Switch {
  export interface Props extends useSwitch.Props {}
}
