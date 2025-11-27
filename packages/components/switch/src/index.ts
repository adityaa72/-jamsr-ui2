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

export type SwitchProps = SwitchRoot.Props;
