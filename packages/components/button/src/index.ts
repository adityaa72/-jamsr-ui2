import { ButtonRoot } from "./button";
import { ButtonConfig, useButtonConfig } from "./button-config";
import { ButtonContext } from "./button-context";
import { ButtonLoading } from "./button-loading";
import { ButtonVariantProps, buttonVariant } from "./styles";

export {
  ButtonConfig,
  ButtonContext,
  ButtonLoading,
  buttonVariant,
  useButtonConfig,
  type ButtonVariantProps,
};

export interface Button {
  (props: ButtonRoot.Props): React.ReactNode;
  Loading: typeof ButtonLoading;
}

export const Button = Object.assign(ButtonRoot, {
  Loading: ButtonLoading,
}) as Button;

export namespace Button {
  export interface Props extends ButtonRoot.Props {}
  export interface Config extends ButtonConfig.Props {}
}
