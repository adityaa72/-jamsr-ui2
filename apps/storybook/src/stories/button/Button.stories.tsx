import { Button } from "@jamsrui/react";
import { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "../../icons";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: { type: "radio" },
    },
    spinner: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "default",
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const WithIcons: Story = {
  args: {
    children: "Button",
    startContent: <InfoIcon />,
    endContent: <InfoIcon />,
  },
};

export const Loading: Story = {
  args: { isLoading: true, children: "Submit" },
};

export const Variants: Story = {
  render: () => {
    const variants: Button.Props["variant"][] = [
      "light",
      "text",
      "outlined",
      "solid",
      "flat",
    ];
    const colors: Button.Props["color"][] = [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ];
    return (
      <div className="flex flex-col gap-4">
        {variants.map((variant) => {
          return (
            <div key={variant} className="flex gap-4">
              {colors.map((color) => (
                <Button
                  key={`${variant}-${color}`}
                  variant={variant}
                  color={color}
                >
                  {variant}
                </Button>
              ))}
            </div>
          );
        })}
      </div>
    );
  },
};
