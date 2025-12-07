import { DateInput as DateInputRoot } from "./date-input";
import { DateInputConfig, useDateInputConfig } from "./date-input-config";
import { DateInputSlots, DateInputVariants, dateInputVariants } from "./styles";
import { useDateInput } from "./use-date-input";

export {
  DateInputConfig,
  dateInputVariants,
  useDateInput,
  useDateInputConfig,
  type DateInputSlots,
  type DateInputVariants,
};

export const DateInput = Object.assign(DateInputRoot, {});

export namespace DateInput {
  export interface Props extends DateInputRoot.Props {}
  export interface Config extends DateInputConfig.Props {}
}
