import { mergeConfigProps } from "@jamsrui/utils";

import { useCheckboxConfig } from "./checkbox-config";
import { CheckboxContent } from "./checkbox-content";
import { CheckboxContext } from "./checkbox-context";
import { CheckboxDescription } from "./checkbox-description";
import { CheckboxErrorMessage } from "./checkbox-error-message";
import { CheckboxIcon } from "./checkbox-icon";
import { CheckboxInput } from "./checkbox-input";
import { CheckboxLabel } from "./checkbox-label";
import { CheckboxRoot } from "./checkbox-root";
import { CheckboxTrigger } from "./checkbox-trigger";
import { CheckboxWrapper } from "./checkbox-wrapper";
import { useCheckbox } from "./use-checkbox";

export const Checkbox = (props: Checkbox.Props) => {
  const config = useCheckboxConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useCheckbox(mergedProps);
  return (
    <CheckboxContext value={ctx}>
      <CheckboxRoot>
        <CheckboxWrapper>
          <CheckboxTrigger>
            <CheckboxIcon />
            <CheckboxInput />
          </CheckboxTrigger>
          <CheckboxContent>
            <CheckboxLabel />
            <CheckboxDescription />
          </CheckboxContent>
        </CheckboxWrapper>
        <CheckboxErrorMessage />
      </CheckboxRoot>
    </CheckboxContext>
  );
};

export namespace Checkbox {
  export interface Props extends useCheckbox.Props {}
}
