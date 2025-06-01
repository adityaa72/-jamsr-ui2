import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@jamsrui/react";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <Accordion
        className="accordion"
        onClick={() => console.log("clicked")}
        render={
          <section
            className="accodion-section"
            onClick={() => console.log("clicked to section")}
          />
        }
      >
        <AccordionItem>
          <AccordionTrigger>Press me to open</AccordionTrigger>
          <AccordionContent>I am the accordion content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};
