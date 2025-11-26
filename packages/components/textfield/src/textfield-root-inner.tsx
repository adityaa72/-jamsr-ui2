import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";
import { useTextFieldContext } from "./textfield-context";

export const TextfieldRootInner = (props: TextfieldRootInner.Props) => {
  const ctx = useTextFieldContext();
  const renderElement = useRenderElement("div", {
    props: [props, ctx?.getRootProps({}) ?? {}],
  });
  return renderElement;
};

export namespace TextfieldRootInner {
  export interface Props extends UIProps<"div"> {}
}
