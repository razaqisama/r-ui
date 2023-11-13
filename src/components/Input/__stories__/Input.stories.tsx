import type { Meta, StoryObj } from "@storybook/react";
import Input from "..";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  argTypes: {
    type: {
      options: ["number", "text", "password", "textarea", "date"],
      control: {
        type: "select",
      },
    },
    isError: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    // leftAccessory: (
    //   <div style={{ background: "red", width: "24px", height: "24px" }} />
    // ),
    // rightAccessory: (
    //   <div style={{ background: "red", width: "24px", height: "24px" }} />
    // ),
    prefix: "https://",
    suffix: ".com",
    placeholder: "Input",
  },
};
