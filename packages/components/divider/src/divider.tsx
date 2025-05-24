import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useDividerConfig } from "./divider-config";
import { useDivider } from "./use-divider";

import type { UIProps } from "@jamsr-ui/utils";

export const Divider = (props: Divider.Props) => {
  const config = useDividerConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useDivider(mergedProps);
  const { getRootProps, getDividerProps } = ctx;
  const { children } = props;

  const composedChildren = (
    <>
      <div {...getDividerProps({})} />
      {!!children && (
        <>
          {children}
          <div {...getDividerProps({})} />
        </>
      )}
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return renderElement;
};

export namespace Divider {
  export interface Props extends UIProps<"div"> {}
}
