"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useButtonConfig } from "./button-config";
import { buttonVariant } from "./styles";
import { useButton } from "./use-button";

import { ButtonContext } from "./button-context";
import type { ButtonVariantProps } from "./styles";

export const ButtonRoot = (props: ButtonRoot.Props) => {
  const config = useButtonConfig();
  const mergedProps = mergeConfigProps(
    buttonVariant.defaultVariants,
    config,
    props
  );
  const ctx = useButton(mergedProps);
  const { getButtonProps } = ctx;

  const button = useRenderElement("button", {
    props: [getButtonProps({}), { children: props.children }],
  });
  return <ButtonContext value={ctx}>{button}</ButtonContext>;
};

export namespace ButtonRoot {
  export interface VariantProps extends ButtonVariantProps {}
  export interface Props extends useButton.Props {}
}
