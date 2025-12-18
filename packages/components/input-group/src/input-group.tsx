"use client";
import { mergeConfigProps } from "@jamsrui/utils";

import { useInputGroupConfig } from "./input-group-config";
import { InputGroupContext } from "./input-group-context";
import { InputGroupRoot } from "./input-group-root";
import { inputGroupVariants } from "./styles";
import { useInputGroup } from "./use-input-group";

export const InputGroup = (props: InputGroup.Props) => {
  const config = useInputGroupConfig();
  const mergedProps = mergeConfigProps(
    inputGroupVariants.defaultVariants,
    config,
    props
  );
  const value = useInputGroup(mergedProps);
  return (
    <InputGroupContext value={value}>
      <InputGroupRoot>{props.children}</InputGroupRoot>
    </InputGroupContext>
  );
};

export namespace InputGroup {
  export interface Props extends useInputGroup.Props {}
}
