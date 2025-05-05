import { UIProps } from "@jamsr-ui/utils";

const AccordionContent = (props: AccordionContent.Props) => {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
};

namespace AccordionContent {
  export interface Props extends UIProps<"div"> {}
}

export { AccordionContent };
