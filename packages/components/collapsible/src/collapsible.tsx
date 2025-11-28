"use client";

import { cloneElement } from "react";

import { CollapsibleContext } from "./collapsible-context";
import { useCollapsible } from "./use-collapsible";

export const Collapsible = (props: Collapsible.Props) => {
  const { children } = props;
  const ctx = useCollapsible(props);
  const renderElement = cloneElement(children, ctx.getRootProps());
  return <CollapsibleContext value={ctx}>{renderElement}</CollapsibleContext>;
};

export namespace Collapsible {
  export interface Props extends useCollapsible.Props {
    children: React.ReactElement<unknown>;
  }
}
