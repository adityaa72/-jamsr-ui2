import { UIProps } from "@jamsr-ui/utils";

const AccordionTrigger = (props: AccordionTrigger.Props) => {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
};

namespace AccordionTrigger {
  export interface Props extends UIProps<"div"> {}
}

export { AccordionTrigger };
