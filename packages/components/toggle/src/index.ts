
import { Toggle as ToggleRoot } from "./toggle";
import { ToggleConfig, useToggleConfig } from "./toggle-config";

export { ToggleConfig, useToggleConfig };

export const Toggle = Object.assign(ToggleRoot, {});

export namespace Toggle {
  export interface Props extends ToggleRoot.Props {}
  export interface Config extends ToggleConfig.Props {}
}
