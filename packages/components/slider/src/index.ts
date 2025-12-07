
import { Slider as SliderRoot } from "./slider";
import { SliderConfig, useSliderConfig } from "./slider-config";

export { SliderConfig, useSliderConfig };

export const Slider = Object.assign(SliderRoot, {});

export namespace Slider {
  export interface Props extends SliderRoot.Props {}
  export interface Config extends SliderConfig.Props {}
}
