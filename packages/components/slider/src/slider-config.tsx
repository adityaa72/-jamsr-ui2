"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Slider } from "./slider";

export const [SliderConfig, useSliderConfig] = createConfigContext({
  displayName: "SliderConfig",
});

export namespace SliderConfig {
  export interface Props extends WithGlobalConfig<Slider.Props> {}
}
