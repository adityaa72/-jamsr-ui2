import { mergeConfigProps } from "@jamsrui/utils";

import { useRadioConfig } from "./radio-config";
import { RadioContent } from "./radio-content";
import { RadioContext } from "./radio-context";
import { RadioControl } from "./radio-control";
import { RadioDescription } from "./radio-description";
import { RadioIndicator } from "./radio-indicator";
import { RadioInput } from "./radio-input";
import { RadioLabel } from "./radio-label";
import { RadioRoot } from "./radio-root";
import { useRadio } from "./use-radio";

export const Radio = (props: Radio.Props) => {
  const config = useRadioConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useRadio(mergedProps);
  return (
    <RadioContext value={ctx}>
      <RadioRoot>
        <RadioControl>
          <RadioInput />
          <RadioIndicator />
        </RadioControl>
        <RadioContent>
          <RadioLabel />
          <RadioDescription />
        </RadioContent>
      </RadioRoot>
    </RadioContext>
  );
};

export namespace Radio {
  export interface Props extends useRadio.Props {}
}
