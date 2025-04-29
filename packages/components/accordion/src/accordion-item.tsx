import { ComponentPropsWithoutRef } from "react";

const AccordionItem = (props: AccordionItem.Props) => {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
};

namespace AccordionItem {
  export type Props = ComponentPropsWithoutRef<"div">;
  export type Orientation = "horizontal" | "vertical";
}

export { AccordionItem };
