import type { Meta, StoryObj } from "@storybook/react";
import Accordions from "..";
import { Text } from "../..";

const meta: Meta<typeof Accordions> = {
  title: "Display/Accordions",
  component: Accordions,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Accordions>;

export const Primary: Story = {
  args: {
    children: (
      <Text>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        molestie, lectus eu rutrum volutpat, ligula lacus efficitur elit, eu
        tempus est dui posuere nibh. Cras tincidunt tincidunt arcu, a consequat
        odio fermentum in. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Aenean posuere purus lorem, eu lacinia libero feugiat id. Cras
        cursus volutpat scelerisque. Duis porttitor augue sed nunc imperdiet
        consectetur. Mauris sodales commodo eros sed posuere. Maecenas odio
        lorem, scelerisque id augue vitae, molestie pellentesque augue. In
        sagittis id orci at ultricies. Sed ullamcorper augue leo, eget ornare
        sapien iaculis non. Pellentesque placerat condimentum eros, at tincidunt
        urna posuere in. Nulla nec laoreet mi. Nulla nec viverra lectus,
        venenatis posuere erat. Donec pellentesque hendrerit nunc, at venenatis
        velit hendrerit eget. Maecenas ut venenatis tortor, eu ultrices nisl.
        Nunc vestibulum urna id commodo euismod. Etiam at interdum nunc. Duis
        velit mauris, blandit ac sagittis tincidunt, sagittis ac est. Sed luctus
        est tortor, scelerisque pretium eros gravida id. Praesent faucibus elit
        ut velit iaculis, a posuere enim vehicula. Proin venenatis ac nisi quis
        tincidunt. Nulla tincidunt libero a elit pharetra interdum. Sed
        facilisis dolor ante, a consequat sem dignissim non. Sed consequat diam
        sed tristique fringilla. In ac ante tellus. Vivamus rutrum molestie
        lorem, vitae tempus est commodo at. Nam diam dolor, faucibus quis lacus
        elementum, tempus finibus purus. Nulla risus eros, auctor vel justo nec,
        scelerisque finibus urna. Quisque commodo sagittis mauris vitae porta.
        Vivamus in hendrerit enim. Nulla facilisi. Nullam eget elementum quam.
        Sed sed semper enim. Proin bibendum ligula eget nulla elementum
        ullamcorper. Donec augue nunc, posuere sollicitudin dignissim ut,
        maximus vel nulla. Donec id porta turpis. Sed risus risus, pharetra a
        eros a, vulputate vehicula quam. Donec lectus enim, imperdiet non congue
        et, egestas quis lacus. Nulla congue velit risus, sed volutpat erat
        varius nec. Duis pharetra, dolor dictum tempor luctus, enim arcu tempus
        ex, eu accumsan risus tellus at ipsum. Suspendisse vehicula non turpis a
        consequat. Nulla sit amet vulputate elit, a congue diam. Maecenas est
        lacus, laoreet vitae ornare quis, hendrerit a turpis. Vestibulum
        placerat placerat auctor. Curabitur ac tempor sem, sed commodo elit. Sed
        eget tortor tempus, sollicitudin leo vel, efficitur metus. Aliquam
        ornare augue id augue fringilla fermentum. Ut non nulla ac neque
        porttitor malesuada. Morbi vitae risus sed mi hendrerit interdum eget a
        nisi. Praesent vitae lorem id urna placerat commodo vel sed tellus.
        Morbi auctor turpis id arcu ornare luctus.{" "}
      </Text>
    ),
  },
};
