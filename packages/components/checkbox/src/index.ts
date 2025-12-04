import { Checkbox as CheckboxRoot } from "./checkbox";
import { CheckboxContent } from "./checkbox-content";
import { CheckboxControl } from "./checkbox-control";
import { CheckboxIndicator } from "./checkbox-indicator";
export { CheckboxConfig, useCheckboxConfig } from "./checkbox-config";

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Content: CheckboxContent,
});

export type CheckboxProps = CheckboxRoot.Props;

export namespace Checkbox {
  export interface Props extends CheckboxRoot.Props {}
  export interface Control extends CheckboxControl.Props {}
  export interface Indicator extends CheckboxIndicator.Props {}
  export interface Content extends CheckboxContent.Props {}
}
