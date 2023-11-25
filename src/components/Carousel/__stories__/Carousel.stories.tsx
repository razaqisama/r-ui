import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "..";

const imagesUrl = [
  "https://images.unsplash.com/photo-1682685797741-f0213d24418c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1698778574083-279be0ac6681?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1699795836286-9987d11ca969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
];

function Test() {
  return (
    <div>
      <Carousel>
        {imagesUrl.map((item, index) => {
          return (
            <img
              onDragStart={(e) => {
                e.preventDefault();
              }}
              style={{ objectFit: "cover", width: "100%", height: "360px" }}
              key={index}
              alt="carousel-image"
              src={item}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

const meta: Meta<typeof Carousel> = {
  title: "Display/Carousel",
  component: Test,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  args: {},
};
