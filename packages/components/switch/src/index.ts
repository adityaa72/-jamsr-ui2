export { SwitchConfig, useSwitchConfig } from "./switch-config";
import { Switch as SwitchRoot } from "./switch";
import { SwitchContent } from "./switch-content";
import { SwitchThumb } from "./switch-thumb";
import { SwitchTrack } from "./switch-track";

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Content: SwitchContent,
  Track: SwitchTrack,
  Thumb: SwitchThumb,
});

export namespace Switch {
  export interface Props extends SwitchRoot.Props {}
  export interface Content extends SwitchContent.Props {}
  export interface Track extends SwitchTrack.Props {}
  export interface Thumb extends SwitchThumb.Props {}
}
