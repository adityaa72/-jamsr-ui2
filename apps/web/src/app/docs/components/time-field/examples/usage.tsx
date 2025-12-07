"use client";

import { TimeField, TimeInput, TimeSegment } from "@jamsrui/react";

export const TimeFieldUsage = () => {
  return (
    <TimeField>
      <TimeInput>{(segment) => <TimeSegment segment={segment} />}</TimeInput>
    </TimeField>
  );
};
