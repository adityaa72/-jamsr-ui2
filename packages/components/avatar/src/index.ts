import { Avatar as AvatarRoot } from "./avatar";
import { AvatarFallback } from "./avatar-fallback";
import { AvatarImage } from "./avatar-image";
import { AvatarIndicator } from "./avatar-indicator";

export { AvatarConfig, useAvatarConfig } from "./avatar-config";

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Indicator: AvatarIndicator,
});

export namespace Avatar {
  export interface Props extends AvatarRoot.Props {}
  export interface Image extends AvatarImage.Props {}
  export interface Fallback extends AvatarFallback.Props {}
  export interface Indicator extends AvatarIndicator.Props {}
}
