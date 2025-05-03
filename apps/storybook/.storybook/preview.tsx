import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/index.css";

const preview: Preview = {
  argTypes: {
    startContent: {
      control: false,
    },
    endContent: {
      control: false,
    },
    render: {
      control: false,
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        title: "Table of Contents",
      },
      theme: themes.dark,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Foundations", "Components"],
      },
    },
    darkMode: {
      current: "dark",
      stylePreview: true,
      darkClass: "dark",
      lightClass: "light",
      classTarget: "html",
      dark: {
        ...themes.dark,
        appBg: "#000000",
        barBg: "#000000",
        base: "red",
        appContentBg: "#000000",
      },
      light: {
        ...themes.normal,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
