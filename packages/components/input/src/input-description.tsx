import { Description } from "@jamsrui/description";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputDescription = (props: InputDescription.Props) => {
  const { children, ...restProps } = props;
  const { getDescriptionProps } = useInputContext();
  return (
    <Description {...getDescriptionProps(restProps)}>{children}</Description>
  );
};

export namespace InputDescription {
  export interface Props extends UIProps<"p"> {}
}
