"use client";
import { mergeConfigProps } from "@jamsrui/utils";

import { textareaVariants } from "./styles";
import { useTextareaConfig } from "./textarea-config";
import { useTextarea } from "./use-textarea";

export const Textarea = (props: Textarea.Props) => {
  const config = useTextareaConfig();
  const mergedProps = mergeConfigProps(
    textareaVariants.defaultVariants,
    config,
    props
  );
  const { getTextareaProps } = useTextarea(mergedProps);
  return <textarea {...getTextareaProps({})} />;
};

export namespace Textarea {
  export interface Props extends useTextarea.Props {}
}
