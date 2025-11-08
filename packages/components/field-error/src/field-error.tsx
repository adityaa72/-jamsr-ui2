import { useRenderElement } from "@jamsrui/hooks";

import { useFieldError } from "./use-field-error";

export const FieldError = (props: FieldError.Props) => {
  const descProps = useFieldError(props);
  const renderElement = useRenderElement("span", {
    props: [descProps],
  });
  return renderElement;
};

export namespace FieldError {
  export interface Props extends useFieldError.Props {}
}
