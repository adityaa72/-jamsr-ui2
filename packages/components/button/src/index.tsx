import { ButtonRoot } from "./button";
import { ButtonConfig, useButtonConfig } from "./button-config";
import { ButtonContext, useButtonContext } from "./button-context";
import { ButtonLoading } from "./button-loading";
import { ButtonVariantProps, buttonVariant } from "./styles";

export {
  ButtonConfig,
  ButtonContext,
  ButtonLoading,
  buttonVariant,
  useButtonConfig,
  useButtonContext,
  type ButtonVariantProps,
};

export const Button = Object.assign(ButtonRoot, {
  Loading: ButtonLoading,
});

export namespace Button {
  export interface Props extends ButtonRoot.Props {}
  export interface Config extends ButtonConfig.Props {}
}
