import {
  CheckboxContent,
  CheckboxDescription,
  CheckboxInput,
  CheckboxLabel,
  CheckboxRoot,
  CheckboxTrigger,
  CheckboxWrapper,
} from "@jamsrui/checkbox/primitive";
import { Checkbox } from "@jamsrui/react";

export const CheckboxCustomized = () => {
  return (
    <Checkbox
      label="I am a checkbox"
      slots={{
        root: <CheckboxRoot className="border" />,
        trigger: <CheckboxTrigger />,
        label: <CheckboxLabel className="text-primary" />,
        description: (
          <CheckboxDescription className="text-foreground-quaternary" />
        ),
        wrapper: <CheckboxWrapper className="border border-default" />,
        content: <CheckboxContent className="border border-default-active" />,
        input: <CheckboxInput data-testid="input" />,
      }}
    >
      Hiii there
    </Checkbox>
  );
};
