import type { Meta, StoryObj } from "@storybook/react";
import Text from "..";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    tag: {
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
    size: {
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
      ],
      control: { type: "select" },
    },
    color: {
      control: "color",
    },
    weight: {
      options: ["regular", "medium", "semibold", "bold"],
      control: { type: "select" },
    },
    textAlign: {
      options: ["left", "center", "right", "justify"],
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: "Paragraph",
  },
};
