import { FieldError } from "@jamsrui/field-error";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputErrorMessage = (props: InputErrorMessage.Props) => {
  const { children, ...restProps } = props;
  const { getErrorMessageProps } = useInputContext();
  return (
    <FieldError {...getErrorMessageProps(restProps)}>{children}</FieldError>
  );
};

export namespace InputErrorMessage {
  export interface Props extends UIProps<"span"> {}
}
