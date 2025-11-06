import type { UIProps } from "@jamsrui/utils";

export const Textarea = (props: Textarea.Props) => {
  return <textarea {...props} />;
};

export namespace Textarea {
  export interface Props extends UIProps<"textarea"> {}
}
