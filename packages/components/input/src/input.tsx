import { useRenderElement } from "@jamsr-ui/hooks";

import type { useInput } from "./use-input";

export const Input = (props: Input.Props) => {
  const renderElement = useRenderElement("input", {
    props,
  });
  return renderElement;
};

export namespace Input {
  export interface Props extends useInput.Props {}
}
