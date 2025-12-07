import { Switch as SwitchRoot } from "./switch";
import { SwitchConfig, useSwitchConfig } from "./switch-config";
import { SwitchContent } from "./switch-content";
import { SwitchContext, useSwitchContext } from "./switch-context";
import { SwitchThumb } from "./switch-thumb";
import { SwitchTrack } from "./switch-track";
import { SwitchSlots, SwitchVariants, switchVariants } from "./styles";
import { useSwitch } from "./use-switch";

export {
  SwitchConfig,
  SwitchContent,
  SwitchContext,
  SwitchThumb,
  SwitchTrack,
  switchVariants,
  useSwitch,
  useSwitchConfig,
  useSwitchContext,
  type SwitchSlots,
  type SwitchVariants,
};

export const Switch = Object.assign(SwitchRoot, {
  Content: SwitchContent,
  Track: SwitchTrack,
  Thumb: SwitchThumb,
});

export namespace Switch {
  export interface Props extends SwitchRoot.Props {}
  export interface Config extends SwitchConfig.Props {}
  export interface Content extends SwitchContent.Props {}
  export interface Track extends SwitchTrack.Props {}
  export interface Thumb extends SwitchThumb.Props {}
}
