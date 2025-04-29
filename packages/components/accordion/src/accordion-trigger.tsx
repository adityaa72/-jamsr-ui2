import { ComponentPropsWithoutRef } from "react";

const AccordionTrigger = (props: AccordionTrigger.Props) => {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
};

namespace AccordionTrigger {
  export type Props = ComponentPropsWithoutRef<"div">;
}

export { AccordionTrigger };
