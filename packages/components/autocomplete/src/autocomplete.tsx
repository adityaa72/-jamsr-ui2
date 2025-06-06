import { useRenderElement } from "@jamsrui/hooks";
import { Input } from "@jamsrui/input";
import { mergeProps } from "@jamsrui/utils";

import { useAutocompleteConfig } from "./autocomplete-config";
import { AutocompleteContent } from "./autocomplete-content";
import { AutocompleteContext } from "./autocomplete-context";
import { AutocompletePopover } from "./autocomplete-popover";
import { useAutocomplete } from "./use-autocomplete";

export const Autocomplete = (props: Autocomplete.Props) => {
  const { children } = props;
  const config = useAutocompleteConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useAutocomplete(mergedProps);
  const { getRootProps, getInputProps } = ctx;

  const composedChildren = (
    <>
      <Input {...getInputProps({})} />
      <AutocompletePopover>
        <AutocompleteContent>{children}</AutocompleteContent>
      </AutocompletePopover>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return <AutocompleteContext value={ctx}>{renderElement}</AutocompleteContext>;
};

export namespace Autocomplete {
  export interface Props extends useAutocomplete.Props {}
}
