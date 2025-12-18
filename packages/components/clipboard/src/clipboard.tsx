"use client";
import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { ClipboardButton } from "./clipboard-button";
import { useClipboardConfig } from "./clipboard-config";
import { ClipboardContext } from "./clipboard-context";
import { copyToClipboardVariants } from "./styles";
import { useClipboard } from "./use-clipboard";

export const Clipboard = (props: Clipboard.Props) => {
  const config = useClipboardConfig();
  const mergedProps = mergeConfigProps(
    copyToClipboardVariants.defaultVariants,
    config,
    props
  );
  const ctx = useClipboard(mergedProps as Clipboard.Props);
  const { getRootProps } = ctx;

  const { children } = props;
  const composedChildren = (
    <>
      {children}
      <ClipboardButton />
    </>
  );

  const renderElement = useRenderElement("label", {
    props: [getRootProps(), { children: composedChildren }],
  });
  return <ClipboardContext value={ctx}>{renderElement}</ClipboardContext>;
};

export namespace Clipboard {
  export interface Props extends useClipboard.Props {}
}
