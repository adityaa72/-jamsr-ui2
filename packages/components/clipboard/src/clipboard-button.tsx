"use client";
import { useRenderElement } from "@jamsrui/hooks";
import { CheckIcon, CopyIcon } from "@jamsrui/icons";

import { useClipboardContext } from "./clipboard-context";

import type { UIProps } from "@jamsrui/utils";

export const ClipboardButton = (props: ClipboardButton.Props) => {
  const { getButtonProps, hideCopyButton, isCopied, getIconProps } =
    useClipboardContext();

  const composedChildren = isCopied ? (
    <CheckIcon {...getIconProps({})} />
  ) : (
    <CopyIcon {...getIconProps({})} />
  );
  const renderElement = useRenderElement("button", {
    props: [getButtonProps(props), { children: composedChildren }],
  });
  if (hideCopyButton) return null;
  return renderElement;
};

export namespace ClipboardButton {
  export interface Props extends UIProps<"button"> {}
}
