"use client";
import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useDividerConfig } from "./divider-config";
import { dividerVariants } from "./styles";
import { useDivider } from "./use-divider";

export const Divider = (props: Divider.Props) => {
  const config = useDividerConfig();
  const mergedProps = mergeConfigProps(
    dividerVariants.defaultVariants,
    config,
    props
  );
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
  export interface Props extends useDivider.Props {}
}
