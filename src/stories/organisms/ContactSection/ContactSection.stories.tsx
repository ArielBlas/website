import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ContactSection } from "@components/organisms";

export default {
  title: "Organisms/ContactSection",
  component: ContactSection,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ContactSection>;

const Template: ComponentStory<typeof ContactSection> = (args) => (
  <ContactSection {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Contact",
  formGroup: {
    items: [
      { label: "Email", type: "email" },
      { label: "Password", type: "password" },
    ],
    buttons: [{ children: "Submit" }],
  },
};
