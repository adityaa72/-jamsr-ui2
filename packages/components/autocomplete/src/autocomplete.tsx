import { useRenderElement } from "@jamsr-ui/hooks";

import type { UIProps } from "@jamsr-ui/utils";

export const Autocomplete = (props: Autocomplete.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace Autocomplete {
  export interface Props extends UIProps<"div"> {}
}
