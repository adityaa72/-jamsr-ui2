import { NumberField as NumberFieldRoot } from "./number-field";
import { NumberFieldConfig, useNumberFieldConfig } from "./number-field-config";
import { NumberFieldDecrement } from "./number-field-decrement";
import { NumberFieldGroup } from "./number-field-group";
import { NumberFieldIncrement } from "./number-field-increment";
import { NumberFieldInput } from "./number-field-input";

export {
  NumberFieldConfig,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  useNumberFieldConfig,
};

export const NumberField = Object.assign(NumberFieldRoot, {
  Root: NumberFieldRoot,
  Group: NumberFieldGroup,
  Input: NumberFieldInput,
  Increment: NumberFieldIncrement,
  Decrement: NumberFieldDecrement,
});
