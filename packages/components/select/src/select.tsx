import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useSelectConfig } from "./select-config";
import { SelectContext } from "./select-context";
import { SelectErrorMessage } from "./select-error-message";
import { SelectHelperText } from "./select-helper-text";
import { SelectIndicator } from "./select-indicator";
import { SelectInnerWrapper } from "./select-inner-wrapper";
import { SelectLabel } from "./select-label";
import { SelectMainWrapper } from "./select-main-wrapper";
import { SelectPlaceholder } from "./select-placeholder";
import { SelectPopover } from "./select-popover";
import { SelectTrigger } from "./select-trigger";
import { SelectValue } from "./select-value";
import { useSelect } from "./use-select";

export const Select = (props: Select.Props) => {
  const { children } = props;
  const config = useSelectConfig();
  const mergedProps = mergeConfigProps(config,config, props);
  const ctx = useSelect(mergedProps);
  const { getRootProps, hasValue } = ctx;

  const composedChildren = (
    <>
      <SelectLabel />
      <SelectMainWrapper>
        <SelectTrigger>
          <SelectInnerWrapper>
            {hasValue ? <SelectValue /> : <SelectPlaceholder />}
            <SelectIndicator />
          </SelectInnerWrapper>
        </SelectTrigger>
        <SelectHelperText />
        <SelectErrorMessage />
      </SelectMainWrapper>
      <SelectPopover>{children}</SelectPopover>
    </>
  );
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props), { children: composedChildren }],
  });
  return <SelectContext value={ctx}>{renderElement}</SelectContext>;
};

export namespace Select {
  export interface Props extends useSelect.Props {}
}
