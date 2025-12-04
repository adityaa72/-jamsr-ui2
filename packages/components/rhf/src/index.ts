import { RHFCheckbox } from "./rhf-checkbox";
import { RHFField as RHFFieldRoot } from "./rhf-field";
import { RHFFieldError } from "./rhf-field-error";
import { RHFInput } from "./rhf-input";
import { RHFNumberField } from "./rhf-number-field";
import { RHFSwitch } from "./rhf-switch";
import { RHFTextarea } from "./rhf-textarea";

export const RHFField = Object.assign(RHFFieldRoot, {
  Root: RHFFieldRoot,
  FieldError: RHFFieldError,
  Input: RHFInput,
  Textarea: RHFTextarea,
  Switch: RHFSwitch,
  Checkbox: RHFCheckbox,
  NumberField: RHFNumberField,
});
