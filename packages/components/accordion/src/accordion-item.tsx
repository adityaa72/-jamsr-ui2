import { UIProps } from "@jamsr-ui/utils";

const AccordionItem = (props: AccordionItem.Props) => {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
};

namespace AccordionItem {
  export type Props = UIProps<"div">;
  export type Orientation = "horizontal" | "vertical";
}

export { AccordionItem };
