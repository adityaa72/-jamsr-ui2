
import { DatePicker as DatePickerRoot } from "./date-picker";
import { DatePickerConfig, useDatePickerConfig } from "./date-picker-config";

export { DatePickerConfig, useDatePickerConfig };

export const DatePicker = Object.assign(DatePickerRoot, {});

export namespace DatePicker {
  export interface Props extends DatePickerRoot.Props {}
  export interface Config extends DatePickerConfig.Props {}
}
