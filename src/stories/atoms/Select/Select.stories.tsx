import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "@components/atoms";

export default {
  title: "Atoms/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
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

export const Basic = Template.bind({});

Basic.args = {
  options: options,
  select: options[1],
};
