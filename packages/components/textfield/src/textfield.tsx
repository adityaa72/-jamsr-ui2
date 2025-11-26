import { TextFieldContext } from "./textfield-context";
import { TextfieldRootInner } from "./textfield-root-inner";
import { useTextField } from "./use-textfield";

export const TextField = (props: TextField.Props) => {
  const ctx = useTextField(props);
  const { children } = props;
  return (
    <TextFieldContext value={ctx}>
      <TextfieldRootInner>{children}</TextfieldRootInner>
    </TextFieldContext>
  );
};

export namespace TextField {
  export interface Props extends useTextField.Props {}
}
