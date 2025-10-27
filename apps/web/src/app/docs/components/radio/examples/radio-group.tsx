import { Radio, RadioGroup } from "@jamsrui/react";

export const RadioGroupExample = () => {
  return (
    <RadioGroup label="Select your favorite city">
      <Radio value="buenos-aires">Buenos Aires</Radio>
      <Radio value="sydney">Sydney</Radio>
      <Radio value="san-francisco">San Francisco</Radio>
      <Radio value="london">London</Radio>
      <Radio value="tokyo">Tokyo</Radio>
    </RadioGroup>
  );
};
