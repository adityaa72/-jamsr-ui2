import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useAlertConfig } from "./alert-config";
import { useAlertContext } from "./alert-context";

import type { UIProps } from "@jamsr-ui/utils";

export const AlertTitle = (props: AlertTitle.Props) => {
  const config = useAlertConfig();
  const ctx = useAlertContext();
  const mergedProps = mergeProps(
    config.slotProps?.title,
    ctx.slotProps?.title,
    props
  );
  const renderElement = useRenderElement("h3", {
    props: mergedProps,
  });
  return renderElement;
};

export namespace AlertTitle {
  export interface Props extends UIProps<"h3"> {}
}
