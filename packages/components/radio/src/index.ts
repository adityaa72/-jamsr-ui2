import { Radio as RadioRoot } from "./radio";
import { RadioContent } from "./radio-content";
import { RadioControl } from "./radio-control";
import { RadioGroup } from "./radio-group";
import { RadioIndicator } from "./radio-indicator";

export const Radio = Object.assign(RadioRoot, {
  Root: RadioRoot,
  Content: RadioContent,
  Control: RadioControl,
  Indicator: RadioIndicator,
});

export { RadioGroup };

export namespace Radio {
  export interface Props extends RadioRoot.Props {}
  export interface Content extends RadioContent.Props {}
  export interface Control extends RadioControl.Props {}
  export interface Indicator extends RadioIndicator.Props {}
}
