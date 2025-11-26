import { TextFieldContext } from "./textfield-context";
import { TextfieldRootInner } from "./textfield-root-inner";
import { useTextField } from "./use-textfield";

export const TextFieldRoot = (props: TextFieldRoot.Props) => {
  const ctx = useTextField(props);
  const { children } = props;
  return (
    <TextFieldContext value={ctx}>
      <TextfieldRootInner>{children}</TextfieldRootInner>
    </TextFieldContext>
  );
};

export namespace TextFieldRoot {
  export interface Props extends useTextField.Props {}
}
