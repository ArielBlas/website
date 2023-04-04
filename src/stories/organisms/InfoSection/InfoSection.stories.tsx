import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoSection } from "@components/organisms";

export default {
  title: "Organisms/InfoSection",
  component: InfoSection,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof InfoSection>;

const Template: ComponentStory<typeof InfoSection> = (args) => (
  <InfoSection {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "About me",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo
  voluptates praesentium atque dicta vero minus quisquam magnam possimus.
  Adipisci unde culpa, illum illo assumenda odio perspiciatis! Nisi, quasi
  similique?`,
  button: {
    children: "Download CV",
  },
};
