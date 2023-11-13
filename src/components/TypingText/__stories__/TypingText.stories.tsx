import type { Meta, StoryObj } from "@storybook/react";
import TypingText from "..";

const meta: Meta<typeof TypingText> = {
  title: "Typography/TypingText",
  component: TypingText,
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof TypingText>;

export const Single: Story = {
  args: {
    text: "Hello guys, saya buat text baru nih",
  },
};

export const Multiple: Story = {
  args: {
    text: [
      "Hello guys, saya buat sebuah text nih",
      "Nah ini, saya buat text baru guys.",
    ],
  },
};
