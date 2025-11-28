"use client";

import { FloatingArrow } from "@floating-ui/react";

import { useMenuContext } from "./menu-context";

import type { FloatingArrowProps } from "@floating-ui/react";

export const MenuArrow = (props: MenuArrow.Props) => {
  const { getArrowProps } = useMenuContext();
  return <FloatingArrow {...getArrowProps(props)} />;
};

export namespace MenuArrow {
  export interface Props extends Omit<FloatingArrowProps, "context"> {}
}
