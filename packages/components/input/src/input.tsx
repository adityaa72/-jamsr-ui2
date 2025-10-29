import { mergeConfigProps } from "@jamsrui/utils";

import { useInputConfig } from "./input-config";
import { InputContent } from "./input-content";
import { InputContentWrapper } from "./input-content-wrapper";
import { InputContext } from "./input-context";
import { InputDescription } from "./input-description";
import { InputEndContent } from "./input-end-content";
import { InputErrorMessage } from "./input-error-message";
import { InputField } from "./input-field";
import { InputLabel } from "./input-label";
import { InputRoot } from "./input-root";
import { InputStartContent } from "./input-start-content";
import { InputWrapper } from "./input-wrapper";
import { useInput } from "./use-input";

export const Input = (props: Input.Props) => {
  const config = useInputConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const ctx = useInput(mergedProps);
  return (
    <InputContext value={ctx}>
      <InputRoot>
        <InputWrapper>
          <InputLabel />
          <InputContentWrapper>
            <InputStartContent />
            <InputContent>
              <InputField />
            </InputContent>
            <InputEndContent />
          </InputContentWrapper>
        </InputWrapper>
        <InputDescription />
        <InputErrorMessage />
      </InputRoot>
    </InputContext>
  );
};

export namespace Input {
  export interface Props extends useInput.Props {}
}
