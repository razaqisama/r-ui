import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "..";

const meta: Meta<typeof Dropdown> = {
  title: "Action/Dropdown",
  component: Dropdown,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {},
};
