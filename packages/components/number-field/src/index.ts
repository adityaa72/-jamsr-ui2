import { NumberField as NumberFieldRoot } from "./number-field";
import { NumberFieldConfig, useNumberFieldConfig } from "./number-field-config";
import { NumberFieldDecrementButton } from "./number-field-decrement-button";
import { NumberFieldGroup } from "./number-field-group";
import { NumberFieldIncrementButton } from "./number-field-increment-button";
import { NumberFieldInput } from "./number-field-input";

export {
  NumberFieldConfig,
  NumberFieldDecrementButton,
  NumberFieldGroup,
  NumberFieldIncrementButton,
  NumberFieldInput,
  useNumberFieldConfig,
};

export const NumberField = Object.assign(NumberFieldRoot, {
  Root: NumberFieldRoot,
  Group: NumberFieldGroup,
  Input: NumberFieldInput,
  IncrementButton: NumberFieldIncrementButton,
  DecrementButton: NumberFieldDecrementButton,
});
