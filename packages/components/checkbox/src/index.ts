import { Checkbox as CheckboxRoot } from "./checkbox";
import { CheckboxConfig, useCheckboxConfig } from "./checkbox-config";
import { CheckboxContent } from "./checkbox-content";
import { CheckboxControl } from "./checkbox-control";
import { CheckboxIndicator } from "./checkbox-indicator";
import { useCheckbox } from "./use-checkbox";

export {
  CheckboxConfig,
  CheckboxContent,
  CheckboxControl,
  CheckboxIndicator,
  useCheckbox,
  useCheckboxConfig,
};

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Content: CheckboxContent,
});

export namespace Checkbox {
  export interface Props extends CheckboxRoot.Props {}
  export interface Config extends CheckboxConfig.Props {}
  export interface Control extends CheckboxControl.Props {}
  export interface Indicator extends CheckboxIndicator.Props {}
  export interface Content extends CheckboxContent.Props {}
}
