import { Input } from "@jamsrui/input";

import type { UIProps } from "@jamsrui/utils";

export const Textarea = (props: Textarea.Props) => {
  return <Input render={<textarea />} {...props} />;
};

export namespace Textarea {
  export interface Props extends UIProps<"input"> {}
}
