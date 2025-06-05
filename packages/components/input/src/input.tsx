import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useInputConfig } from "./input-config";
import { InputContent } from "./input-content";
import { InputContentWrapper } from "./input-content-wrapper";
import { InputContext } from "./input-context";
import { InputEndContent } from "./input-end-content";
import { InputErrorMessage } from "./input-error-message";
import { InputField } from "./input-field";
import { InputHelperText } from "./input-helper-text";
import { InputLabel } from "./input-label";
import { InputStartContent } from "./input-start-content";
import { InputWrapper } from "./input-wrapper";
import { useInput } from "./use-input";

export const Input = (props: Input.Props) => {
  const config = useInputConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useInput(mergedProps);
  const { getRootProps } = ctx;

  const composedChildren = (
    <>
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
      <InputHelperText />
      <InputErrorMessage />
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps(props), { children: composedChildren }],
  });
  return <InputContext value={ctx}>{renderElement}</InputContext>;
};

export namespace Input {
  export interface Props extends useInput.Props {}
}
