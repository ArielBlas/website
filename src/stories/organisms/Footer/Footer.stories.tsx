import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer } from "@components/organisms";

export default {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: "Footer",
};
