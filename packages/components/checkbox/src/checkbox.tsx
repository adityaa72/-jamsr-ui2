import { Slot } from "@jamsrui/slot";
import { mergeConfigProps } from "@jamsrui/utils";

import { useCheckboxConfig } from "./checkbox-config";
import {
  CheckboxContent,
  CheckboxContext,
  CheckboxDescription,
  CheckboxErrorMessage,
  CheckboxIcon,
  CheckboxInput,
  CheckboxLabel,
  CheckboxRoot,
  CheckboxTrigger,
  CheckboxWrapper,
  useCheckbox,
} from "./primitive";

import type { SlotsToReactNode } from "@jamsrui/utils";

import type { CheckboxSlots } from "./primitive/styles";

export const Checkbox = (props: Checkbox.Props) => {
  const config = useCheckboxConfig();
  const mergedProps = mergeConfigProps(config, config, props);
  const { label, children, slots, ...restProps } = mergedProps;
  const ctx = useCheckbox(restProps);
  const hasContent = !!label || !!children;
  return (
    <CheckboxContext value={ctx}>
      <Slot slot={slots?.root}>
        <CheckboxRoot>
          <Slot slot={slots?.wrapper}>
            <CheckboxWrapper>
              <Slot slot={slots?.trigger}>
                <CheckboxTrigger>
                  <CheckboxIcon />
                  <Slot slot={slots?.input}>
                    <CheckboxInput />
                  </Slot>
                </CheckboxTrigger>
              </Slot>
              {hasContent ? (
                <Slot slot={slots?.content}>
                  <CheckboxContent>
                    {!!label && (
                      <Slot slot={slots?.label}>
                        <CheckboxLabel>{label}</CheckboxLabel>
                      </Slot>
                    )}
                    {!!children && (
                      <Slot slot={slots?.description}>
                        <CheckboxDescription>{children}</CheckboxDescription>
                      </Slot>
                    )}
                  </CheckboxContent>
                </Slot>
              ) : null}
            </CheckboxWrapper>
          </Slot>
          <CheckboxErrorMessage />
        </CheckboxRoot>
      </Slot>
    </CheckboxContext>
  );
};

export namespace Checkbox {
  export interface Props extends useCheckbox.Props {
    label?: React.ReactNode;
    slots?: SlotsToReactNode<CheckboxSlots>;
  }
}
