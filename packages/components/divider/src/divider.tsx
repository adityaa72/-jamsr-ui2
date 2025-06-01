import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useDividerConfig } from "./divider-config";
import { useDivider } from "./use-divider";

import type { UIProps } from "@jamsrui/utils";

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
