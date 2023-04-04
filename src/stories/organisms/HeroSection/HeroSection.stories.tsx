import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeroSection } from "@components/organisms";

export default {
  title: "Organisms/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeroSection>;

const Template: ComponentStory<typeof HeroSection> = (args) => (
  <HeroSection {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Ariel Blas",
  description: "Full Stack Developer",
  button: {
    children: "Contact me",
  },
  slider: [
    { id: 1, name: "Example 1" },
    { id: 2, name: "Example 2" },
    { id: 3, name: "Example 3" },
    { id: 4, name: "Example 4" },
  ],
};
