import { Radio, RadioGroup } from "@jamsrui/react";

export const RadioUsage = () => {
  return (
    <RadioGroup label="Select your favorite city">
      <Radio value="buenos-aires" label="Buenos Aires" />
      <Radio value="sydney" label="Sydney" />
      <Radio value="san-francisco" label="San Francisco" />
      <Radio value="london" label="London" />
      <Radio value="tokyo" label="Tokyo" />
    </RadioGroup>
  );
};
