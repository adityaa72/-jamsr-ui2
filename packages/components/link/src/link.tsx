import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const Link = (props: Link.Props) => {
  const { render, ...linkProps } = props;
  const renderElement = useRenderElement("a", props, {
    props: linkProps,
  });
  return renderElement;
};

export namespace Link {
  export interface Props extends UIProps<"a"> {}
}
