import { Label, Radio, RadioGroup } from "@jamsrui/react";

export const RadioUsage = () => {
  return (
    <RadioGroup>
      <Label>Select your favorite city</Label>
      <Radio value="buenos-aires">
        <Radio.Control />
        <Radio.Content>
          <Label>Buenos Aires</Label>
        </Radio.Content>
      </Radio>
      <Radio value="sydney">
        <Radio.Control />
        <Radio.Content>
          <Label>Sydney</Label>
        </Radio.Content>
      </Radio>
      <Radio value="san-francisco">
        <Radio.Control />
        <Radio.Content>
          <Label>San Francisco</Label>
        </Radio.Content>
      </Radio>
      <Radio value="london">
        <Radio.Control />
        <Radio.Content>
          <Label>London</Label>
        </Radio.Content>
      </Radio>
      <Radio value="tokyo">
        <Radio.Control />
        <Radio.Content>
          <Label>Tokyo</Label>
        </Radio.Content>
      </Radio>
    </RadioGroup>
  );
};
