import { createContext, use } from "react";

import type { DatePicker } from "./date-picker";

const DatepickerContext = createContext<DatePickerConfig.Props>({});
export const DatePickerConfig = (props: DatePickerConfig.Props) => {
  const { children, ...restProps } = props;
  return <DatepickerContext value={restProps}>{children}</DatepickerContext>;
};

export const useDatePickerConfig = () => {
  const context = use(DatepickerContext);
  return context;
};

export namespace DatePickerConfig {
  export interface Props extends DatePicker.Props {}
}
