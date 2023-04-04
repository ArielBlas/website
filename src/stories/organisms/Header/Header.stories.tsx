import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "../../../../public/logo.png";

import { Header } from "@components/organisms";

export default {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Basic = Template.bind({});
const options = [
  {
    id: 1,
    name: "EN",
  },
  {
    id: 2,
    name: "ES",
  },
];

Basic.args = {
  brand: { src: Logo, width: "60px", height: "60px" },
  items: [
    { id: 1, name: "Home", href: "/home" },
    { id: 2, name: "Portfolio", href: "/portfolio" },
  ],
  button: { children: "Contact" },
  options: options,
  select: options[0],
};
