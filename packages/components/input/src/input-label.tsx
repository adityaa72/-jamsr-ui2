import { Label } from "@jamsrui/label";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputLabel = (props: InputLabel.Props) => {
  const { children, ...restProps } = props;
  const { getLabelProps } = useInputContext();
  return <Label {...getLabelProps(restProps)}>{children}</Label>;
};

export namespace InputLabel {
  export interface Props extends UIProps<"label"> {}
}
