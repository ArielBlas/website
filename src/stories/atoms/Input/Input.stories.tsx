import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "@components/atoms";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    className: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
