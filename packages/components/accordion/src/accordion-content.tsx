import { UIProps } from "@jamsr-ui/utils";

const AccordionContent = (props: AccordionContent.Props) => {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
};

namespace AccordionContent {
  export type Props = UIProps<"div">;
}

export { AccordionContent };
