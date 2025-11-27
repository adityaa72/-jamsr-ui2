import { ButtonRoot } from "./button";
import { ButtonConfig } from "./button-config";
import { ButtonLoading } from "./button-loading";

export { ButtonConfig, useButtonConfig } from "./button-config";

export const Button = Object.assign(ButtonRoot, {
  Config: ButtonConfig,
  Loading: ButtonLoading,
});
