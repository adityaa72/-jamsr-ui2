import { Avatar as AvatarRoot } from "./avatar";
import { AvatarConfig, useAvatarConfig } from "./avatar-config";
import { AvatarContext, useAvatarContext } from "./avatar-context";
import { AvatarFallback } from "./avatar-fallback";
import { AvatarImage } from "./avatar-image";
import { AvatarIndicator } from "./avatar-indicator";
import { AvatarSlots, AvatarVariants, avatarVariants } from "./styles";
import { useAvatar } from "./use-avatar";

export {
  AvatarConfig,
  AvatarContext,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  avatarVariants,
  useAvatar,
  useAvatarConfig,
  useAvatarContext,
  type AvatarSlots,
  type AvatarVariants,
};

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Indicator: AvatarIndicator,
});

export namespace Avatar {
  export interface Props extends AvatarRoot.Props {}
  export interface Config extends AvatarConfig.Props {}
  export interface Image extends AvatarImage.Props {}
  export interface Fallback extends AvatarFallback.Props {}
  export interface Indicator extends AvatarIndicator.Props {}
}
