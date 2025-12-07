"use client";
import { useTextarea } from "./use-textarea";

export const Textarea = (props: Textarea.Props) => {
  const { getTextareaProps } = useTextarea(props);
  return <textarea {...getTextareaProps({})} />;
};

export namespace Textarea {
  export interface Props extends useTextarea.Props {}
}
