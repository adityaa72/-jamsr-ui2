import { mergeConfigProps } from "@jamsrui/utils";

import { useCheckboxConfig } from "./checkbox-config";
import {
  CheckboxContent,
  CheckboxContext,
  CheckboxDescription,
  CheckboxErrorMessage,
  CheckboxIcon,
  CheckboxInput,
  CheckboxLabel,
  CheckboxRoot,
  CheckboxTrigger,
  CheckboxWrapper,
  useCheckbox,
} from "./primitive";

export const Checkbox = (props: Checkbox.Props) => {
  const config = useCheckboxConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useCheckbox(mergedProps);
  const { label, children } = mergedProps;
  return (
    <CheckboxContext value={ctx}>
      <CheckboxRoot>
        <CheckboxWrapper>
          <CheckboxTrigger>
            <CheckboxIcon />
            <CheckboxInput />
          </CheckboxTrigger>
          <CheckboxContent>
            <CheckboxLabel>{label}</CheckboxLabel>
            <CheckboxDescription>{children}</CheckboxDescription>
          </CheckboxContent>
        </CheckboxWrapper>
        <CheckboxErrorMessage />
      </CheckboxRoot>
    </CheckboxContext>
  );
};

export namespace Checkbox {
  export interface Props extends useCheckbox.Props {
    label?: React.ReactNode;
  }
}
