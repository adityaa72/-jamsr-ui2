import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const Autocomplete = (props: Autocomplete.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace Autocomplete {
  export interface Props extends UIProps<"div"> {}
}
