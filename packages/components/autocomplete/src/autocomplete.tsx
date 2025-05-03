import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const Autocomplete = (props: Autocomplete.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: elementProps,
  });
  return renderElement;
};

export namespace Autocomplete {
  export interface Props extends UIProps<"div"> {}
}
