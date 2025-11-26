"use client";
import { InputGroupContext } from "./input-group-context";
import { InputGroupRoot } from "./input-group-root";
import { useInputGroup } from "./use-input-group";

export const InputGroup = (props: InputGroup.Props) => {
  const value = useInputGroup(props);
  return (
    <InputGroupContext value={value}>
      <InputGroupRoot>{props.children}</InputGroupRoot>
    </InputGroupContext>
  );
};

export namespace InputGroup {
  export interface Props extends useInputGroup.Props {}
}
