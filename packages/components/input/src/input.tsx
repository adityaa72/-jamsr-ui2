import { useIsInsideInputGroup } from "@jamsrui/input-group";
import { useInput } from "./use-input";

export const Input = (props: Input.Props) => {
  const { getInputProps } = useInput(props);
  return <input {...getInputProps({})} />;
};

export namespace Input {
  export interface Props extends useInput.Props {}
}
