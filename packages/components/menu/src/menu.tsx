import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const Menu = (props: Menu.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: elementProps,
  });
  return renderElement;
};

export namespace Menu {
  export interface Props extends UIProps<"div"> {}
}
