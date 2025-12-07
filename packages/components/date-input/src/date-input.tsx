"use client";
import { mergeConfigProps } from "@jamsrui/utils";

import { useDateInputConfig } from "./date-input-config";
import { DateInputContext } from "./date-input-context";
import { DateInputRoot } from "./date-input-root";
import { DateInputSegment } from "./date-input-segment";
import { DateInputSeparator } from "./date-input-separator";
import { useDateInput } from "./use-date-input";

export const DateInput = (props: DateInput.Props) => {
  const config = useDateInputConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useDateInput(mergedProps);
  return (
    <DateInputContext value={ctx}>
      <DateInputRoot>
        <DateInputSegment segment="day" children="DD" />
        <DateInputSeparator />
        <DateInputSegment segment="month" children="MM" />
        <DateInputSeparator />
        <DateInputSegment segment="year" children="YYYY" />
      </DateInputRoot>
    </DateInputContext>
  );
};

export namespace DateInput {
  export interface Props extends useDateInput.Props {}
}
