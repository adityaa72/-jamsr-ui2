import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const LinearProgress = (props: LinearProgress.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: elementProps,
  });
  return renderElement;
};

export namespace LinearProgress {
  export interface Props extends UIProps<"div"> {}
}
