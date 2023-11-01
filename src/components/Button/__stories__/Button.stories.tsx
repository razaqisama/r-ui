import type { Meta, StoryObj } from "@storybook/react";
import Button from "..";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
