import { mergeConfigProps } from "@jamsrui/utils";

import { useRadioGroupConfig } from "./radio-group-config";
import { RadioGroupContent } from "./radio-group-content";
import { RadioGroupContext } from "./radio-group-context";
import { RadioGroupDescription } from "./radio-group-description";
import { RadioGroupErrorMessage } from "./radio-group-error-message";
import { RadioGroupLabel } from "./radio-group-label";
import { RadioGroupRoot } from "./radio-group-root";
import { useRadioGroup } from "./use-radio-group";

export const RadioGroup = (props: RadioGroup.Props) => {
  const config = useRadioGroupConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useRadioGroup(mergedProps);
  return (
    <RadioGroupContext value={ctx}>
      <RadioGroupRoot>
        <RadioGroupLabel />
        <RadioGroupContent />
        <RadioGroupDescription />
        <RadioGroupErrorMessage />
      </RadioGroupRoot>
    </RadioGroupContext>
  );
};

export namespace RadioGroup {
  export interface Props extends useRadioGroup.Props {}
}
