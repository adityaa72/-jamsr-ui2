import { UIProps, useRenderElement } from "@jamsr-ui/utils";

const Accordion = (props: Accordion.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: [elementProps],
  });
  return renderElement;
};

namespace Accordion {
  export type Props = UIProps<"div">;
}

export { Accordion };
