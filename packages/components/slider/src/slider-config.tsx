import { createContext, use } from "react";
import { Slider } from "./slider";

const SliderContext = createContext<SliderConfig.Props>({});
export const SliderConfig = (props: SliderConfig.Props) => {
  const { children, ...restProps } = props;
  return <SliderContext value={restProps}>{children}</SliderContext>;
};

export const useSliderConfig = () => {
  const context = use(SliderContext);
  return context;
};

export namespace SliderConfig {
  export interface Props extends Slider.Props {}
}
