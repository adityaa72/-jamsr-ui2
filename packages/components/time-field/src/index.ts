import { TimeField as TimeFieldRoot } from "./time-field";
import { TimeFieldConfig, useTimeFieldConfig } from "./time-field-config";
import { TimeFieldSeparator } from "./time-field-separator";
import { TimeInput } from "./time-input";
import { TimeSegment } from "./time-segment";
import { TimeFieldSlots, TimeFieldVariants, timeFieldVariants } from "./styles";
import { useTimeField } from "./use-time-field";
import { useTimeSegment } from "./use-time-segment";

export {
  TimeFieldRoot,
  TimeFieldConfig,
  TimeFieldSeparator,
  TimeInput,
  TimeSegment,
  timeFieldVariants,
  useTimeField,
  useTimeFieldConfig,
  useTimeSegment,
  type TimeFieldSlots,
  type TimeFieldVariants,
};

export const TimeField = Object.assign(TimeFieldRoot, {
  Input: TimeInput,
  Segment: TimeSegment,
  Separator: TimeFieldSeparator,
});
