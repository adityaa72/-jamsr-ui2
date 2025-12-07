"use client";
import { FloatingList } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useAutocompleteContext } from "./autocomplete-context";

import type { UIProps } from "@jamsrui/utils";

export const AutocompleteContent = (props: AutocompleteContent.Props) => {
  const { getContentProps, getFloatingListProps } = useAutocompleteContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return (
    <FloatingList {...getFloatingListProps()}>{renderElement}</FloatingList>
  );
};

export namespace AutocompleteContent {
  export interface Props extends UIProps<"div"> {}
}
