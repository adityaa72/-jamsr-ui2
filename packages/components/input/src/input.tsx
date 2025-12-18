"use client";
import { mergeConfigProps } from "@jamsrui/utils";
import { useInputConfig } from "./input-config";
import { inputVariants } from "./styles";
import { useInput } from "./use-input";

export const Input = (props: Input.Props) => {
  const config = useInputConfig();
  const mergedProps = mergeConfigProps(
    inputVariants.defaultVariants,
    config,
    props
  );
  const { getInputProps } = useInput(mergedProps);
  return <input {...getInputProps({})} />;
};

export namespace Input {
  export interface Props extends useInput.Props {}
}
