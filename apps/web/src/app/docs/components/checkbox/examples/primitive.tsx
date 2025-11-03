import {
  Checkbox,
  CheckboxContent,
  CheckboxDescription,
  CheckboxErrorMessage,
  CheckboxIcon,
  CheckboxInput,
  CheckboxLabel,
  CheckboxRoot,
  CheckboxTrigger,
  CheckboxWrapper,
} from "@jamsrui/checkbox/primitive";

export const CheckboxPrimitive = () => {
  return (
    <Checkbox>
      <CheckboxRoot>
        <CheckboxWrapper>
          <CheckboxTrigger>
            <CheckboxIcon />
            <CheckboxInput />
          </CheckboxTrigger>
          <CheckboxContent>
            <CheckboxLabel>I'm label</CheckboxLabel>
            <CheckboxDescription>I'm description</CheckboxDescription>
          </CheckboxContent>
        </CheckboxWrapper>
        <CheckboxErrorMessage />
      </CheckboxRoot>
    </Checkbox>
  );
};
