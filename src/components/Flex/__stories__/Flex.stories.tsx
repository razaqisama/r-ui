import type { Meta, StoryObj } from "@storybook/react";
import Flex from "..";

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: { type: "select" },
    },
    justifyContent: {
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      control: { type: "select" },
    },
    alignItems: {
      options: ["flex-start", "center", "flex-end"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    children: (
      <>
        {Array(10)
          .fill({})
          .map((_, index) => {
            return (
              <div key={index} style={{ background: "red", padding: "12px" }}>
                1
              </div>
            );
          })}
      </>
    ),
  },
};
