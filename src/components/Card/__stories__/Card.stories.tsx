import type { Meta, StoryObj } from "@storybook/react";
import Card from "..";

const meta: Meta<typeof Card> = {
  title: "Display/Card",
  component: Card,
  argTypes: {
    type: {
      options: ["elevated", "outlined", "filled"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {},
};
