import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormGroup } from "@components/molecules";

export default {
  title: "Molecules/FormGroup",
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => (
  <FormGroup {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  items: [
    { label: "Email", type: "email" },
    { label: "Password", type: "password" },
  ],
  onSubmit: () => {},
  buttons: [{ children: "Submit" }],
};
