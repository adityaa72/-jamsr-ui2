"use client";
import { mergeConfigProps } from "@jamsrui/utils";

import { useCircularProgressConfig } from "./circular-progress-config";
import { useCircularProgress } from "./use-circular-progress";

export const CircularProgress = (props: CircularProgress.Props) => {
  const config = useCircularProgressConfig();
  const mergedProps = mergeConfigProps(config,config, props);
  const ctx = useCircularProgress(mergedProps);
  const {
    showLabel,
    getRootProps,
    getTrackProps,
    getLabelProps,
    getProgressProps,
    label,
  } = ctx;

  return (
    <svg {...getRootProps({})}>
      {/* Background Track */}
      <circle {...getTrackProps({})} />
      {/* Progress Arc */}
      <circle {...getProgressProps({})} />
      {/* Text inside the circle */}
      {!!showLabel && <text {...getLabelProps({})}>{label}</text>}
    </svg>
  );
};

export namespace CircularProgress {
  export interface Props extends useCircularProgress.Props {}
}
