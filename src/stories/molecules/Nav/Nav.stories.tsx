import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Nav } from "@components/molecules";

export default {
  title: "Molecules/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  items: [
    { id: 1, name: "Home", href: "/home" },
    { id: 2, name: "Portfolio", href: "/portfolio" },
  ],
};
