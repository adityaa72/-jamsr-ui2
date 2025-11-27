import { Checkbox as CheckboxRoot } from "./checkbox";
import { CheckboxContent } from "./checkbox-content";
import { CheckboxControl } from "./checkbox-control";
import { CheckboxIndicator } from "./checkbox-indicator";
export { CheckboxConfig, useCheckboxConfig } from "./checkbox-config";

export const Checkbox = Object.assign(CheckboxRoot, {
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Content: CheckboxContent,
});

export type Checkbox = {
  Root: CheckboxRoot.Props;
  Control: CheckboxControl.Props;
  Indicator: CheckboxIndicator.Props;
  Content: CheckboxContent.Props;
};

export type CheckboxProps = CheckboxRoot.Props;
