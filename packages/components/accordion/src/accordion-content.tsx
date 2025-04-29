import { ComponentPropsWithoutRef } from "react";

const AccordionContent = (props: AccordionContent.Props) => {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
};

namespace AccordionContent {
  export type Props = ComponentPropsWithoutRef<"div">;
}

export { AccordionContent };
