import { DateField as DateFieldRoot } from "./date-field";
import { DateFieldConfig, useDateFieldConfig } from "./date-field-config";
import { DateFieldSeparator } from "./date-field-separator";
import { DateInput } from "./date-input";
import { DateSegment } from "./date-segment";
import { DateFieldSlots, DateFieldVariants, dateFieldVariants } from "./styles";
import { useDateField } from "./use-date-field";
import { useDateSegment } from "./use-date-segment";

export {
  DateFieldRoot,
  DateFieldConfig,
  DateFieldSeparator,
  DateInput,
  DateSegment,
  dateFieldVariants,
  useDateField,
  useDateFieldConfig,
  useDateSegment,
  type DateFieldSlots,
  type DateFieldVariants,
};

export const DateField = Object.assign(DateFieldRoot, {
  Input: DateInput,
  Segment: DateSegment,
  Separator: DateFieldSeparator,
});
