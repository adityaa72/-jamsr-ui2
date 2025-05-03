import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const Sidebar = (props: Sidebar.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: elementProps,
  });
  return renderElement;
};

export namespace Sidebar {
  export interface Props extends UIProps<"div"> {}
}
