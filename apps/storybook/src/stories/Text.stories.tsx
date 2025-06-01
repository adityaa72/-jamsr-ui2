import { Text } from "@jamsr-ui/react";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "I'm a text",
  },
};
